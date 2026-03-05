import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuctionState {
  id: number | null;
  name: string | null;
  payment_method: string | null;
  email: string | null;
  whatsapp_number: string | null;
  refund_method: string | null;
  refund_account: string | null;
  bid_amount?: number | null;
}

const initialState: AuctionState = {
  id: null,
  name: null,
  payment_method: null,
  email: null,
  whatsapp_number: null,
  refund_method: null,
  refund_account: null,
  bid_amount: null,
};

const AuctionSlice = createSlice({
  name: "auction",
  initialState,
  reducers: {
    setPaymentMethod: (state, action: PayloadAction<string>) => {
      state.payment_method = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
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
    setBidAmount: (state, action: PayloadAction<number>) => {
      state.bid_amount = action.payload;
    },

    resetState: () => initialState,
  },
});

export const {
  setPaymentMethod,
  setEmail,
  setWhatsappNumber,
  setRefundAccount,
  setRefundMethod,
  setBidAmount,
  setName,
} = AuctionSlice.actions;

export default AuctionSlice.reducer;
