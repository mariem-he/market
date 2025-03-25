export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'canceled' | 'disputed';

export interface Order {
  id: number;
  buyer_id: number;
  total_amount: number;
  status: OrderStatus;
  shipping_address: string;
  contact_number: string;
  transaction_hash?: string;
  smart_contract_id?: number;
  created_at: string;
  updated_at: string;
  items: OrderItem[];
}
export interface OrderItem {
    id: number;
    order_id: number;
    product_id: number;
    product_name: string;
    quantity: number;
    unit_price: number;
    subtotal: number;
    farmer_id: number;
  }