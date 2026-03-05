import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInput {
  ID: string;
  Server: string;
}

interface userInGameState {
  username: string | null;
  region: string | null;
  regionCode: string | null;
  game_id?: string | null;
  zone_id?: string | null;
  inputs: UserInput;
}

export interface TopUpState {
  id: number | null;
  name: string | null;
  game_type?: string | null;
  game_id?: string | null;
  zone_id?: string | null;
  inputs: UserInput;
  userData: userInGameState | null;
  region: string | null;
  regionCode: string | null;
  username: string | null;
  product_id: number | null;
  payment_method: string | null;
  email: string | null;
  whatsapp_number: string | null;
  refund_method: string | null;
  refund_account: string | null;
  price?: number | null;
  productType: string | null;
  productName: string | null;
  topUpData: TopUpState | null;
  start_with: string | null;
  image: string | null;
  voucher_code: string | null;
}

const initialState: TopUpState = {
  id: null,
  name: null,
  game_type: null,
  game_id: null,
  zone_id: null,
  inputs: { ID: "", Server: "" },
  userData: null,
  region: null,
  regionCode: null,
  username: null,
  product_id: null,
  payment_method: null,
  email: null,
  whatsapp_number: null,
  refund_method: null,
  refund_account: null,
  price: null,
  productType: null,
  productName: null,
  topUpData: null,
  start_with: null,
  image: null,
  voucher_code: null,
};

const TopUpSlice = createSlice({
  name: "topUp",
  initialState,
  reducers: {
    setGameType: (state, action: PayloadAction<string>) => {
      state.game_type = action.payload;
    },
    setGameId: (state, action: PayloadAction<string>) => {
      state.game_id = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setZoneId: (state, action: PayloadAction<string>) => {
      state.zone_id = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setTopUpData: (state, action) => {
      state.topUpData = action.payload;
    },
    setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
    setRegionCode: (state, action: PayloadAction<string>) => {
      state.regionCode = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setProductId: (state, action: PayloadAction<number>) => {
      state.product_id = action.payload;
    },
    setPaymentMethod: (state, action: PayloadAction<string>) => {
      state.payment_method = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setWhatsappNumber: (state, action: PayloadAction<string>) => {
      state.whatsapp_number = action.payload;
    },
    setRefundAccount: (state, action: PayloadAction<string>) => {
      state.refund_account = action.payload;
    },
    setRefundMethod: (state, action: PayloadAction<string>) => {
      state.refund_method = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setProductName: (state, action: PayloadAction<string>) => {
      state.productName = action.payload;
    },
    setProductType: (state, action: PayloadAction<string>) => {
      state.productType = action.payload;
    },
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    setInputs: (state, action: PayloadAction<UserInput>) => {
      state.inputs = action.payload;
    },
    setVoucherCode: (state, action: PayloadAction<string>) => {
      state.voucher_code = action.payload;
    },
    resetState: () => initialState,
  },
});

export const {
  setGameType,
  setGameId,
  setZoneId,
  setUserData,
  setRegion,
  setRegionCode,
  setUsername,
  setProductId,
  setPaymentMethod,
  setEmail,
  setWhatsappNumber,
  setRefundAccount,
  setRefundMethod,
  setPrice,
  setProductName,
  setProductType,
  setTopUpData,
  setId,
  setImage,
  setInputs,
  resetState,
  setVoucherCode,
} = TopUpSlice.actions;

export default TopUpSlice.reducer;
