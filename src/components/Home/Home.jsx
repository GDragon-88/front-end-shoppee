
import { Slide } from "../Slide/Slide";
import { ItemHome } from "./item/ItemHome";
import { Category } from "./category/Category"; 
import { FlashSale } from "./flashSale/FlashSale.jsx";
import { Banner } from "./banner/Banner";
import { ShopMall } from "./shoppeMall/ShopMall.jsx";
import { Product } from "./suggest/Product.jsx";
import { Navbar } from "../Navbar/Navbar";
export function Home(){
    return(<>
        <Navbar/>
        <Slide/>
        <ItemHome/>
        <Category/>
        <FlashSale/>
        <Banner/>
        <ShopMall/>
        <Product />
    </>)
}