import { Link } from "react-router-dom"
import "./style.css"
export function Nav(self){
    let value = self.value
    return (<>
        <div className='nav'>
            <div className="nav-img">
             <img src="../logo1.png " alt=""/>
            </div>
            <div className="nav-content">{value}</div>
            <Link to="">Bạn cần giúp đỡ?</Link>
        </div>
    
    </>)
}