import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../components/Home/category/fetchCategory";
import flashsaleSlice from "../components/Home/flashSale/flashSale";
import shopMallSlice from "../components/Home/shoppeMall/shopMall";
import productSlice from "../components/Home/suggest/product";
import detailSlice from "../components/Detail/Container/MainRight/container";
import currentView from "../components/CurrentView/currentViewSlice";
import cartSlice from "../components/Cart/cart";
import searchSlice from "../components/Search/MainSearch/mainSearchSlice";
  const store = configureStore({
    reducer:{
        category:categorySlice.reducer,
        flashsale:flashsaleSlice.reducer,
        shopmall:shopMallSlice.reducer,
        product:productSlice.reducer,
        detail:detailSlice.reducer,
        cart:cartSlice.reducer,
        pageCurrent:currentView.reducer,
        search:searchSlice.reducer
    }
})
export default store;