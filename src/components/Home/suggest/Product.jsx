import "./product.css"
import { fetchProcduct } from "./product"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
export function Product() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProcduct())

    }, [])

    const data = useSelector(state => state.product.value)
    return (<>
        <div className="product">
           {data.map(i=>( <div className="product-item" key={i.id} >
                <a href={`/detail/${i.name}`}>
                <div className="product-item-img">
                    <img src={i.link} alt="" />
                </div>
                <div className="product-item-description">
                    <span> {i.name}
                    </span>
                </div>
                <div className="product-item-price">
                    <p>₫</p> <span>{i.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    <small>đã bán 2k</small>
                </div>
                </a>
            </div>
))}

        </div>

    </>)
}