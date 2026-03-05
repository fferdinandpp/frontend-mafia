import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type OrderRequest = Omit<
  JokiState,
  "orderData" | "isPaymentModalOpen" | "isFormOpen"
>;

export interface JokiState {
  product_id?: number | null;
  login_option?: string | null;
  username?: string | null;
  game_id?: string | null;
  account_information?: string | null;
  password?: string | null;
  whatsapp_number?: string | null;
  request_hero?: string | null;
  refund_method?: string | null;
  refund_account?: string | null;
  payment_method?: string | null;
  voucher_code?: string | null;
  record_via?: string | null;
  notes?: string | null;
  example_video?: string | null;
  price?: number | null;
  discount?: string | null;
  imageMontage?: string | null;
  packetName?: string | null;
  orderData?: JokiState | null;
  isPaymentModalOpen?: boolean;
  isFormOpen?: boolean;
  qr_payment?: string | null;
  reff_id?: string | null;
  total_price?: number | null;
  tax?: number | null;
  total_match?: number | null;
  image?: string | null;
  discount_price?: string | null;
  start_rank_product_id?: number | null;
  start_star?: number | null;
  end_rank_product_id?: number | null;
  end_star?: number | null;
  role?: string | null;
  play_time?: string | null;
  type?: string | null;
  product?: string | null;
  product_name?: string | null;
  is_express?: number | null;
}

const initialState: JokiState = {
  product_id: null,
  login_option: null,
  username: null,
  game_id: null,
  account_information: null,
  password: null,
  whatsapp_number: null,
  request_hero: null,
  refund_method: "BCA",
  refund_account: "0441212",
  payment_method: null,
  voucher_code: null,
  record_via: null,
  notes: null,
  example_video: null,
  price: null,
  discount: null,
  imageMontage: null,
  packetName: null,
  orderData: null,
  isPaymentModalOpen: false,
  isFormOpen: false,
  qr_payment: null,
  reff_id: null,
  total_price: null,
  tax: null,
  total_match: null,
  image: null,
  discount_price: null,
  start_rank_product_id: null,
  start_star: null,
  end_rank_product_id: null,
  end_star: null,
  role: null,
  play_time: null,
  type: null,
  product: null,
  product_name: null,
  is_express: null,
};

const JockeySlice = createSlice({
  name: "jockey",
  initialState,
  reducers: {
    setProductId: (state, action: PayloadAction<number>) => {
      state.product_id = action.payload;
    },
    setLoginOption: (state, action: PayloadAction<string>) => {
      state.login_option = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setGameId: (state, action: PayloadAction<string>) => {
      state.game_id = action.payload;
    },
    setAccountInformation: (state, action: PayloadAction<string>) => {
      state.account_information = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setWhatsappNumber: (state, action: PayloadAction<string>) => {
      state.whatsapp_number = action.payload;
    },
    setRequestHero: (state, action: PayloadAction<string>) => {
      state.request_hero = action.payload;
    },
    setRefundMethod: (state, action: PayloadAction<string>) => {
      state.refund_method = action.payload;
    },
    setRefundAccount: (state, action: PayloadAction<string>) => {
      state.refund_account = action.payload;
    },
    setPaymentMethod: (state, action: PayloadAction<string>) => {
      state.payment_method = action.payload;
    },
    setVoucherCode: (state, action: PayloadAction<string>) => {
      state.voucher_code = action.payload;
    },
    setRecordVia: (state, action: PayloadAction<string>) => {
      state.record_via = action.payload;
    },
    setNotes: (state, action: PayloadAction<string>) => {
      state.notes = action.payload;
    },
    setExampleVideo: (state, action: PayloadAction<string>) => {
      state.example_video = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setDiscount: (state, action: PayloadAction<string>) => {
      state.discount = action.payload;
    },
    setPacketName: (state, action: PayloadAction<string>) => {
      state.packetName = action.payload;
    },

    setImageMontage: (state, action: PayloadAction<string>) => {
      state.imageMontage = action.payload;
    },
    setOrderData: (state, action) => {
      state.orderData = action.payload;
    },
    setIsPaymentModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isPaymentModalOpen = action.payload;
    },
    setIsFormOpen: (state, action: PayloadAction<boolean>) => {
      state.isFormOpen = action.payload;
    },
    setQrPayment: (state, action: PayloadAction<string | null>) => {
      state.qr_payment = action.payload;
    },
    setReffId: (state, action: PayloadAction<string | null>) => {
      state.reff_id = action.payload;
    },
    setTotalPrice: (state, action: PayloadAction<number | null>) => {
      state.total_price = action.payload;
    },
    setTax: (state, action: PayloadAction<number | null>) => {
      state.tax = action.payload;
    },
    setTotalMatch: (state, action: PayloadAction<number | null>) => {
      state.total_match = action.payload;
    },
    setImage: (state, action: PayloadAction<string | null>) => {
      state.image = action.payload;
    },
    setDiscountPrice: (state, action: PayloadAction<string | null>) => {
      state.discount_price = action.payload;
    },
    setStartRankProductId: (state, action: PayloadAction<number | null>) => {
      state.start_rank_product_id = action.payload;
    },
    setStartStar: (state, action: PayloadAction<number | null>) => {
      state.start_star = action.payload;
    },
    setEndRankProductId: (state, action: PayloadAction<number | null>) => {
      state.end_rank_product_id = action.payload;
    },
    setEndStar: (state, action: PayloadAction<number | null>) => {
      state.end_star = action.payload;
    },
    setRole: (state, action: PayloadAction<string | null>) => {
      state.role = action.payload;
    },
    setPlayTime: (state, action: PayloadAction<string | null>) => {
      state.play_time = action.payload;
    },
    setType: (state, action: PayloadAction<string | null>) => {
      state.type = action.payload;
    },
    setProduct: (state, action: PayloadAction<string | null>) => {
      state.product = action.payload;
    },
    setProductName: (state, action: PayloadAction<string | null>) => {
      state.product_name = action.payload;
    },
    setIsExpress: (state, action: PayloadAction<number | null>) => {
      state.is_express = action.payload;
    },
    resetState: () => initialState,
  },
});

export const {
  setProductId,
  setLoginOption,
  setUsername,
  setGameId,
  setAccountInformation,
  setPassword,
  setWhatsappNumber,
  setRequestHero,
  setRefundAccount,
  setPaymentMethod,
  setVoucherCode,
  setRecordVia,
  setNotes,
  setExampleVideo,
  setPrice,
  setDiscount,
  setImageMontage,
  setPacketName,
  setOrderData,
  setIsPaymentModalOpen,
  setIsFormOpen,
  setQrPayment,
  setReffId,
  setTotalPrice,
  setTax,
  setTotalMatch,
  setImage,
  setDiscountPrice,
  setStartRankProductId,
  setStartStar,
  setEndRankProductId,
  setEndStar,
  setRole,
  setPlayTime,
  setType,
  setProduct,
  setProductName,
  setIsExpress,
  resetState,
} = JockeySlice.actions;

export default JockeySlice.reducer;
