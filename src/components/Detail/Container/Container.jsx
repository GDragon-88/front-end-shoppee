import './style.css'
import {AsNavFor} from './AsNavFor/AsNavFor'
import { MainRight } from './MainRight/MainRight'
export function Container(){
    return(<>
        <div className="detail-container">
            <div className="detail-container-left">
                <AsNavFor/>
            </div>
            <div className="detail-container-right">
               <MainRight/>
        </div>
        </div>
    
    </>)


}