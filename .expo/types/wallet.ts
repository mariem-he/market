export interface WalletTransaction {
    id: number;
    user_id: number;
    transaction_type: 'deposit' | 'withdrawal' | 'payment' | 'refund';
    amount: number;
    transaction_hash: string;
    status: 'pending' | 'completed' | 'failed';
    created_at: string;
  }