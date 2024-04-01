import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { productApi } from "./productApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productApi.middleware),

});
setupListeners(store.dispatch)
export default store;