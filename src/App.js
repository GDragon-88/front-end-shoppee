import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Register } from "./components/Register/Register";
import { Detail } from "./components/Detail/Detail";
import { Cart } from "./components/Cart/Cart.jsx";
import { Search } from "./components/Search/Search";
function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/login" element={<Login/>}/> 
          <Route  path="/register" element={<Register/>}/>
          <Route path="/detail/:product" element={<Detail/>}/>
          <Route path="/shop-cart" element={<Cart/>}  />
          <Route path="/search/:value" element={<Search/>}/>
        </Routes>
      </Provider>

    </>
  );
}

export default App;
