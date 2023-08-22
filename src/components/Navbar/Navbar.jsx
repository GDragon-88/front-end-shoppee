import "./nav.css"
import { useEffect, useState } from "react";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function Navbar() {

    let cookie = document.cookie.substring(7)
    const [valueUser, setValueUser] = useState()
    const [valueInput, setValueInput] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        if (cookie) {
            fetch("http://localhost:8081/api", {
                method: "POST",
                body: JSON.stringify({ value: cookie }),
                headers: { 'Content-Type': 'application/json' }
            }).then(res => res.json()).then(data => setValueUser(data))
        }
    }, [])
    const onChangeInput = (e) => {
        setValueInput(e.target.value)
       
    }
    const handleClick = () => {
        let cookie = document.cookie.substring(7)
        if (cookie) {
            window.location.href = "/shop-cart"
        } else {
            window.location.href = '/login'
        }
    };
    const handleClickMoveToHomePage = () => {
        navigate('/')
    }
    const handleClickMoveToSearchpage = ()=>{
        navigate(`/search/${valueInput}`)
        // axios.post(`http://localhost:8081/search/${valueInput}`,{value:valueInput}).then(res=>console.log(res))
    }
    const handleLogout = () => {
        Cookies.remove("userId")
        window.location.href = '/login'
    }
    return (
        <>

            <div className="nav-bar">
                <div className="nav-container">
                    <a href="">Kênh Người Bán </a>
                    <a href="">Trở Thành Ngưới Bán Shopii</a>
                    <a href="">Tải Ứng Dụng</a>
                    <a href="">Kết Nối <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className="nav-bar-notice">
                    <div><i className="fa-regular fa-bell"></i>Thông báo</div>
                    <div><i className="fa-regular fa-circle-question"></i>Hỗ Trợ</div>
                    <div><i className="fa-solid fa-globe"></i> Tiếng Việt</div>
                    {valueUser ? <><div className="avatar">
                        <img src={valueUser.url || "https://tbdn.com.vn/wp-content/uploads/2022/09/anh-gai-xinh-deo-kinh-can-11.jpg"} alt='' />
                    </div><div className="user">{valueUser.name || valueUser.email.split("@")[0]}</div>
                        <div className="log-out" onClick={handleLogout}>Đăng xuất </div>
                    </> : <><div className="sign-up"><a href="/register">Đăng Ký</a> </div> <div className="sign-in"> <a href="/login">Đăng Nhập</a> </div></>}
                </div>
                <div className="logo">
                    <img src="../logo.png" alt="" onClick={handleClickMoveToHomePage} />
                </div>
                <div className="input">
                    <input onChange={onChangeInput} />
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <button onClick={handleClickMoveToSearchpage}></button>
                </div>
                <ion-icon name="bag-handle-outline" onClick={handleClick}  ></ion-icon>
                <div className="item-nav-bar">
                    <div>Dép</div>
                    <div>Áo Khoác</div>
                    <div>Ốp Iphone</div>
                    <div>LEGO</div>
                    <div>Dép nữ</div>
                    <div>Áo Croptop</div>
                    <div>Tai Nghe Bluetooth</div>
                </div>
            </div>


        </>
    )
}