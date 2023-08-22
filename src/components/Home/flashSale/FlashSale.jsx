import "./flashsale.css"
import { useState,useEffect } from "react";
import ProgressBar from 'react-percent-bar';
import { useDispatch,useSelector } from "react-redux";
import { fetchFlashSale } from "./flashSale";

export function FlashSale() {
    const [day,setDay]=useState()
    const [hours,setHours]=useState()
    const [minutes,setMinutes]=useState()
    const [seconds,setSeconds]=useState()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchFlashSale())
    })
    const data = useSelector(state=>state.flashsale.value);
    const time = new Date("feb 28,2023 00:00:00").getTime()
    setInterval(()=>{
        const now = new Date().getTime()
        let D = time - now;
        let days = Math.floor(D/(1000*60*60*24));
        let hours = Math.floor(D/(1000*60*60));
        let minutes = Math.floor(D/(1000*60));
        let seconds = Math.floor(D/(1000));
        setDay(days)
        setHours(hours%=24);
        setMinutes(minutes%=60);
        setSeconds(seconds%=60);
    },1000)
    return (<>
        <div className="item-flash-sale">
            <div id='flash-sale'>
                <div className="img-fls-sale"></div>
                <div className="timingout">
                    <div>{day}</div>
                    <div>{hours}</div>
                    <div>{minutes}</div>
                    <div>{seconds}</div>
                </div>
            </div>

            <div className="item-list">
                {data.map((i)=>(<div className="item-list-content" key={i.id}>
                    <div className="item-list-img">
                    <img src={i.url}alt=""/>
                    </div>
                    <div className="price">{i.price}VND</div>
                    <div className="percent">
                    <ProgressBar width='100%' height='15px' colorShift={true} fillColor="orange" percent={(((i.sale / i.total)*100).toFixed(0))} />
                    </div>
                </div>))}
            </div>
        </div>

    </>)
}