import { z } from "zod";

export const jockeySchema = z.object({
  product_id: z.number().nullable().optional(),
  login_option: z.string().nullable().optional(),
  username: z.string().nullable().optional(),
  game_id: z.string().nullable().optional(),
  total_match: z.number().nullable().optional().optional(),
  account_information: z.string().nullable(),
  password: z.string().nullable().optional(),
  whatsapp_number: z.string().nullable().optional(),
  request_hero: z.string().nullable().optional(),
  refund_account: z.string().nullable().default("0441212").optional(),
  refund_method: z.string().nullable().default("BCA").optional(),
  payment_method: z
    .string()
    .min(1, "Metode pembayaran wajib dipilih")
    .optional(),
  notes: z.string().nullable().optional(),
  voucher_code: z.string().nullable().optional(),
  price: z.number().nullable().optional(),
  record_via: z.string().nullable().optional(),
  example_video: z.string().nullable().optional(),
  imageMontage: z.string().nullable().optional(),
  packetName: z.string().nullable().optional(),
  discount: z.string().nullable().optional(),
  discount_price: z.string().nullable().optional(),
  product_name: z.string().nullable().optional(),
  product: z.string().nullable().optional(),
  start_rank_product_id: z.number().nullable().optional(),
  start_star: z.number().nullable().optional(),
  end_rank_product_id: z.number().nullable().optional(),
  end_star: z.number().nullable().optional(),
});
