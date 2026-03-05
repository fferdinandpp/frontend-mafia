export interface ProductHistory {
  id: number;
  invoice_number: string;
  phone_number: string;
  price: number;
  payment_status: string;
  payment_method: string;
  payment_information: string;
  product: string;
  product_name?: string;
  nickname?: string;
  game_id: string;
  total: number;
  voucher?: string;
  created_at: string;
  expired_at: string;
}
