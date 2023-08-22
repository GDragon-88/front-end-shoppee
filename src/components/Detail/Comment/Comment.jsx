import "./style.css"
import { Rate } from 'antd';
export function Comment(){
    const styleStar = {
        position: "absolute",
    top: "10px",
    left: "20px",
    width: "60px",
    height: "10px",
    display:"flex",
    justifyContent: "space-between",
    color:'rgb(235, 81, 25)'
    }
    return(<>
        <div className="comment">
            <div className="comment-text">
                <img src="" alt="" />
                <span>chien nguyen</span><br/>
                {<Rate value={4} style={styleStar}/>}
                <div className="comment-text-content">asdsadsadasdas</div>
            </div>
        </div>
    </>)
}