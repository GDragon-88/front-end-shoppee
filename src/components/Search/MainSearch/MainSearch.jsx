import "./style.css"
import { Rate } from 'antd';
import { fetchDataSearch } from "./mainSearchSlice";
import { useState ,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Empty } from 'antd';
export function MainSearch(){
    const dispatch = useDispatch()
    let url = useLocation()
    let valueSearch = url.pathname.split("/")[2]
    useEffect(()=>{
        dispatch(fetchDataSearch(valueSearch))
    },[valueSearch])
    let data = useSelector(state=>state.search.value)
    return(<>
        <div className="main-search">
                {data.length === 0 ? <Empty description={"Không tìm thấy kết quả nào"}/> : data.map((i)=>(
                    <div className="main-search-item" key={i.id}>
                    <a href="">
                        <div className="main-search-item-img">
                            <img src={i.link} alt="" />
                        </div>
                        <div className="main-search-item-text">
                            <span>{i.name}</span>
                        </div>
                        <div className="main-search-item-price">
                            {i.price}
                        </div>
                        <div className="main-search-item-rate">
                                 <Rate defaultValue={5} className="rate-star"/>
                                 <p>sale 2k</p>
                        </div>
                    </a>
                </div>
                ))}
                
        </div>
    </>)
}