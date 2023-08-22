import "./cart.css"


import { Navbar } from "../Navbar/Navbar";
import { Notify } from "./Notify/Notify";
import {Product} from "../Home/suggest/Product.jsx"
export function Cart(){
   
    return (<>
        <Navbar />
        <Notify/>
        <div className="cart-product"><Product/></div>
       



    </>)
}