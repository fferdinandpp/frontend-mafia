// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import joki from "./reducer/joki";
// import topUp from "./reducer/top-up";
// import accountMarket from "./reducer/account-market";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = combineReducers({
//   joki,
//   topUp,
//   accountMarket,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export type RootState = ReturnType<typeof rootReducer>;

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);
// export default store;

// src/store/store.ts

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import joki from "./reducer/joki";
import topUp from "./reducer/top-up";
import auction from "./reducer/auction";
import accountMarket from "./reducer/account-market";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// 1. Import layoutReducer yang baru
import layoutReducer from "./reducer/layoutSlice";

const persistConfig = {
  key: "root",
  storage,
  // Optional: jika Anda tidak ingin menyimpan state layout, whitelist reducer lain
  // whitelist: ['joki', 'topUp', 'accountMarket']
};

const rootReducer = combineReducers({
  joki,
  topUp,
  accountMarket,
  auction,
  // 2. Tambahkan layoutReducer di sini
  layout: layoutReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
