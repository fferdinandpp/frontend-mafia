import { z } from "zod";

export const topUpSchema = z.object({
  game_id: z.string().nullable(),
  zone_id: z.string().nullable().optional(),
  product_id: z.number().nullable().optional(),
  id: z.number().nullable().optional(),
  name: z.string().nullable().optional(),
  image: z.string().nullable().optional(),
  price: z.number().nullable().optional(),
  discount: z.string().nullable().optional(),
  discount_price: z.string().nullable().optional(),
  username: z.string().optional(),
  payment_method: z
    .enum(["qris", "balance", "bni", "bri", "permata"])
    .optional(),
  email: z.string().email().optional(),
  whatsapp_number: z.string().nullable().optional(),
  refund_method: z.string().nullable().optional(),
  refund_account: z.string().nullable().optional(),
  voucher_code: z.string().nullable().optional(),
  service_id: z.string().nullable().optional(),
});
