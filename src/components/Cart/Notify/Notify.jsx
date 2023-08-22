import "./style.css"
import { Table } from 'antd';
import { useState, useEffect } from 'react';
import { InputNumber } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../cart";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';
export function Notify() {
    const dispatch = useDispatch()
    const [selectionType] = useState('checkbox');
    const [total, setTotal] = useState(0)
    const dataCart = useSelector(state => state.cart.value)
    const [depend,setDenped]=useState("")
    useEffect(() => {
        dispatch(fetchCart())
        let totalPrice = dataCart.reduce((pre,cur)=>{
            pre+=(cur.price*cur.total)
            return pre
        },0)
        setDenped(totalPrice)
        
    },[depend,dataCart])
  
    const onChangeValue = (value) => {
        setTotal(value)
    };
    const columns = [
        { title: 'Tên sản phẩm', dataIndex: 'Image' },
        { title: 'Name', dataIndex: 'name', },
        { title: 'Đơn giá', dataIndex: 'price', },
        { title: 'Số lượng', dataIndex: 'total', },
        { title: 'Thành tiền', dataIndex: "sum" },
        { title: 'Thao tác', dataIndex: "delete" },
    ];
    const moveCheckoutPage = ()=>{
        let cookie = document.cookie.substring(7)
        if (cookie){
                toast.success('Checkout Successfully ')
                setTimeout(() => {
                    axios.post("http://localhost:8081/cart/checkout",{dataCart}).then((res)=>{console.log(res)})
                    window.location.href = '/'
                }, 2000);
        }else {
            window.location.href = '/login'
        }
    }
    const data = dataCart.map((i, index) => ({
        key: index,
        "Image": <img src={i.link} alt="" />,
        "name": i.name,
        price: i.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
        total: <InputNumber min={1} max={100} defaultValue={i.total} onChange={onChangeValue} />,
        sum: <span>₫{(i.price * i.total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>,
        delete: <button className="btn-delete">🚮</button>
    }))
    let totalPrice = dataCart.reduce((pre,cur)=>{
        pre+=(cur.price*cur.total)
        return pre
    },0)
    
    return (<>
        <div className="notify">
            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/74f3e9ac01da8565c3baead996ed6e2a.png" alt="" />
            <span>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</span>
        </div>
        <div className="main-cart">
            <Table rowSelection={{ type: selectionType, }} columns={columns} dataSource={data} pagination={false}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (e) => {                         
                            if (e.target.tagName === "SPAN" || e.target.tagName === 'svg' || e.target.tagName ==="path" ) {
                                fetch("http://localhost:8081/cart/update", {
                                    method: "POST",
                                    body: JSON.stringify({
                                        id: dataCart[rowIndex].id,
                                        total: total,
                                        user_id: dataCart[rowIndex].user_id
                                    }),
                                    headers: { 'Content-Type': 'application/json' }
                                })
                                let totalPrice = dataCart.reduce((pre,cur)=>{
                                    pre+=(cur.price*cur.total)
                                    return pre
                                },0)
                                setDenped(totalPrice)
                            }
                            if(e.target.classList.contains("btn-delete")){
                                fetch("http://localhost:8081/cart/delete", {
                                    method: "DELETE",
                                    body: JSON.stringify({
                                        id: dataCart[rowIndex].id,
                                        user_id: dataCart[rowIndex].user_id
                                    }),
                                    headers: { 'Content-Type': 'application/json' }
                                }).then(res=>res.json()).then(data=>console.log(data))
                                
                                
                            }
                        },
                    };
                }}
            />
        </div>
        <div className="checkout">   
              <div className="price"> {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}₫</div>
              <button onClick={moveCheckoutPage}>checkout</button>
              <Toaster position='top-right' containerStyle={{ top: 110,left: -20, }} reverseOrder={false}/>
        </div>

    </>)
}