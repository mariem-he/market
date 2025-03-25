export type SmartContractStatus = 'created' | 'funded' | 'shipped' | 'delivered' | 'completed' | 'disputed' | 'refunded';

export interface SmartContract {
  id: number;
  contract_address: string;
  buyer_id: number;
  farmer_id: number;
  order_id: number;
  amount: number;
  status: SmartContractStatus;
  delivery_deadline: string;
  created_at: string;
  updated_at: string;
  transaction_hash: string;
}