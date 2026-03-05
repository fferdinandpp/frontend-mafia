export interface VoucherData {
  id: number;
  name: string;
  price: string;
  category: string;
  service: {
    id: number;
    name: string;
  };
  status: string;
  code: string;
  discount: string;
  end_time: string;
  start_time: string;
  end_date: string;
  start_date: string;
  min_purchase: string;
}
