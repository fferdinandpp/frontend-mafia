

import { configureStore } from '@reduxjs/toolkit';
// 1. PASTIKAN ANDA MENG-IMPORT REDUCER BARU DI SINI
import layoutReducer from './reducer/layoutSlice'; 

export const makeStore = () => {
  return configureStore({
    reducer: {
      // ...reducer Anda yang lain mungkin sudah ada di sini
      
      // 2. PASTIKAN REDUCER BARU DIDAFTARKAN DI DALAM OBJEK INI
      layout: layoutReducer, 
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];