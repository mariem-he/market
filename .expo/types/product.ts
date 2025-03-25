export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    unit: string;
    images: string[];
    category_id: number;
    farmer_id: number;
    farmer_name: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface Category {
    id: number;
    name: string;
    description?: string;
  }