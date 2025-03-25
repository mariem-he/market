export type UserRole = 'admin' | 'farmer' | 'buyer';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  wallet_address?: string;
}

export interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  error: string | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  user: User;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  role: UserRole;
  phone: string;
  wallet_address?: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  token: string;
  user: User;
  [x: string]: string | boolean | User | undefined;
}

export interface LogoutResponse {
  success: boolean;
  message: string;
}
export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  images: string[];
  stock: number;
  createdAt: Date;
}
