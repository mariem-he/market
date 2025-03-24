// services/api.ts
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig  } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginRequest, LoginResponse, LogoutResponse, RegisterRequest, RegisterResponse, User } from '@/.expo/types/auth';
import { ApiResponse } from '@/.expo/types/api';
import { Product } from '@/.expo/types/product';
//import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, LogoutResponse,ApiResponse,User} from '';

// Create API base URL
const API_URL = 'http://127.0.0.1:8000';

class ApiService {
  [x: string]: any;
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor for adding token
    this.api.interceptors.request.use(
        async (config: InternalAxiosRequestConfig) => {
        const token = await AsyncStorage.getItem('userToken');
        
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor for handling errors
    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        // Handle 401 Unauthorized errors
        if (error.response?.status === 401) {
          await AsyncStorage.removeItem('userToken');
          await AsyncStorage.removeItem('userRole');
          await AsyncStorage.removeItem('userId');
          
          // You may want to redirect to login screen here
          // This would typically be handled by your navigation system
        }
        
        return Promise.reject(error);
      }
    );
  }

  // Authentication methods
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await this.api.post<LoginResponse>('/login', credentials);
    return response.data;
  }

  async register(userData: RegisterRequest): Promise<RegisterResponse> {
    const response = await this.api.post<RegisterResponse>('/register', userData);
    return response.data;
  }

  async logout(): Promise<LogoutResponse> {
    const response = await this.api.post<LogoutResponse>('/logout');
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('userRole');
    await AsyncStorage.removeItem('userId');
    return response.data;
  }

  async getCurrentUser(): Promise<User> {
    const response = await this.api.get<ApiResponse<User>>('/user');
    if (!response.data.data) {
      throw new Error('User data not found');
    }
    return response.data.data;
  }

  // For wallet address integration with smart contracts
  async connectWallet(walletAddress: string): Promise<ApiResponse<User>> {
    const response = await this.api.post<ApiResponse<User>>('/wallet/connect', { wallet_address: walletAddress });
    return response.data;
  }

  // Password management
  async forgotPassword(email: string): Promise<ApiResponse<null>> {
    const response = await this.api.post<ApiResponse<null>>('/forgot-password', { email });
    return response.data;
  }

  async resetPassword(token: string, email: string, password: string, password_confirmation: string): Promise<ApiResponse<null>> {
    const response = await this.api.post<ApiResponse<null>>('/reset-password', {
      token,
      email,
      password,
      password_confirmation
    });
    return response.data;
  }
  static async getProducts(): Promise<{ data: Product[] }> {
    return axios.get('/api/products');
  }
}

export default new ApiService();