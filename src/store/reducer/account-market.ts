import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  account_code: string | null;
  email: string | null;
  whatsapp_number: string | null;
  payment_method: string | null;
  price: string | null;
  payment_type: string | null;
  total_search: number | null;
  optional_number: string | null;
  name: string | null;
  voucher_code: string | null;
  telegram_username: string | null;
}

const initialState: AccountState = {
  account_code: null,
  email: null,
  whatsapp_number: null,
  payment_method: null,
  price: null,
  payment_type: null,
  total_search: null,
  optional_number: null,
  name: null,
  voucher_code: null,
  telegram_username: null,
};

const accountMarket = createSlice({
  name: "accountMarket",
  initialState,
  reducers: {
    setCode(state, action: PayloadAction<string>) {
      state.account_code = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setWhatsApp(state, action: PayloadAction<string>) {
      state.whatsapp_number = action.payload;
    },
    setPaymentMethod(state, action: PayloadAction<string>) {
      state.payment_method = action.payload;
    },
    setPrice(state, action: PayloadAction<string>) {
      state.price = action.payload;
    },
    setVoucherCode(state, action: PayloadAction<string>) {
      state.voucher_code = action.payload;
    },
    setPaymentType(state, action: PayloadAction<string>) {
      state.payment_type = action.payload;
    },
    setTotalSearch(state, action: PayloadAction<number>) {
      state.total_search = action.payload;
    },
    setOptionalNumber(state, action: PayloadAction<string>) {
      state.optional_number = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setTelegramUsername(state, action: PayloadAction<string>) {
      state.telegram_username = action.payload;
    },
    resetState: () => initialState,
  },
});

export const {
  setCode,
  setEmail,
  setWhatsApp,
  setPaymentMethod,
  setPrice,
  setPaymentType,
  setTotalSearch,
  setOptionalNumber,
  setName,
  setVoucherCode,
  setTelegramUsername,
  resetState,
} = accountMarket.actions;

export default accountMarket.reducer;
