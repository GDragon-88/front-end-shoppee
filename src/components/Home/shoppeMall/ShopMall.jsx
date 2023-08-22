import "./style.css"
import Carousel from 'nuka-carousel';
import { useEffect } from "react";

import { useDispatch,useSelector } from "react-redux";

import { fetchShopMall } from "./shopMall.js";

export function ShopMall() {
    const url = ['https://cf.shopee.vn/file/vn-50009109-978c038e8d95f61b19053fd6627282b2',
        '	https://cf.shopee.vn/file/vn-50009109-367b9c19f92b029a566e03fc8818bcaa',
        'https://cf.shopee.vn/file/vn-50009109-1b5bf769231a556b85965d89ed9d04cb',
        'https://cf.shopee.vn/file/vn-50009109-367b9c19f92b029a566e03fc8818bcaa',
        'https://cf.shopee.vn/file/vn-50009109-2c379de862a2dd2d4a84457dec864d56',
    ]
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchShopMall())
    })
    const data = useSelector(state=>state.shopmall.value)

    return (<>
        <div className="shop-mall">
            <div className="shop-mall-slide">
                <Carousel>

                    {url.map((i, index) => (
                        <img width='100px' height='350px' style={{ objectFit: 'cover' }} key={index} src={i} />
                    ))}
                </Carousel>
            </div>
            <div className="shop-mall-item">
                        {data.map((i)=>(       <div className="shop-mall-item-child" key={i.id}>
                        <img src={ i.url }alt=""/>
                        <span>{i.description}</span>
                </div>))}
            </div>
        </div>
    </>)
}