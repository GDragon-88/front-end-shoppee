
import { Rate } from 'antd';
import { useState,useEffect } from 'react';
import { TagComponet } from '../../../TagComponent/TagComponet';
import { InputNumber } from 'antd';
import { fetchDetailProduct } from './container';
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
import currentViewSlice from '../../../CurrentView/currentViewSlice';
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import "./style.css"
export function MainRight() {
    const [value, setValue] = useState(1);
    const nameProduct =  window.location.href.split("/")[4]
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(fetchDetailProduct(nameProduct))
    },[])
    const [product] = useSelector(state=> state.detail.value)
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const onChange = (value) => {
        setValue(value)
      };

      const addToCart =()=>{
        let cookie = document.cookie
                if(!cookie){
                    dispatch(currentViewSlice.actions.checkPage({route:"detail",
                    name:nameProduct}))
                    navigate(`/login?page=${nameProduct}`);
                }else{
                    let userValue = cookie.substring(7)
                    let product_id = product.id
                    let dataPost = {
                        value:userValue,
                        id:product_id,
                        total:value
                    }
                    axios.post(`http://localhost:8081/api/detail/${product_id}`,dataPost).then(res=>{
                        console.log(res)
                        toast.success('Add Successfully ')
                    })
                }


                
            }
    return (<>
        <div className="main-right">
            <div className="product-name">
                {product ? product.name : ""}
            </div>
            <div className="product-rate">
                <div className='rate'>
                    <span >
                        <Rate tooltips={desc} onChange={setValue} value={value} />
                    </span>
                </div>
                <div className='feed-back'>
                    1k đánh giá
                 </div>
                <div>
                    2k đã bán 
                </div>
            </div>
            <div className='product-price'>
                <span>₫{product ? product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}</span>
                <div className='product-price-sale'>
                    40% GIẢM
                </div>
            </div>

            <div className='product-code-shop'>
                <div className='product-code-shop-content'>Mã Giảm Giá Của Shop</div>
                <div className='product-vouchers'>
                    <span>3% Giảm</span>
                    <span>₫6k Giảm</span>
                    <span>₫7k Giảm</span>
                </div>
            </div>
            <div className='product-tranform'>
                <div className='product-tranform-content'>Vận Chuyển</div>
                <div className='product-tranform-item'> 
                    <div  className='item-content'>
                    <i className="fa-solid fa-truck-moving"></i>
                    <span>
                    Hàng Đặt Trước (có hàng sau 10 ngày)
                    </span>
                    </div>
                    <div className='item-content-ship'>
                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/74f3e9ac01da8565c3baead996ed6e2a.png" alt="" />
                        <span>Miễn phí vận chuyển</span>          
                    </div>
                </div>
            </div>
            <div className='item-choice'>
                <div className='item-choice-text'>Variation</div>
                <div className='item-choice-child'>
                    <TagComponet/>
                </div>
            </div>
            <div className='product-total'>
                <div className='product-total-text'>Số Lượng</div>
                <div className='product-total-input'>
                <InputNumber min={1} max={100} defaultValue={value} onChange={onChange} />
                </div>
            </div>
            <div className='btn-product'>
                <div className='add-cart'>
                    <button onClick={addToCart}><i className="fa-solid fa-cart-plus"></i>Thêm Vào Giỏ Hàng</button>
                    <Toaster position='top-right' containerStyle={{ top: 110,left: -20, }} reverseOrder={false}/>
                </div>
                <div className='btn-buy-now'>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    </>)
}