import "./category.css"
import { fetchCategory } from "./fetchCategory";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
export function Category(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCategory())
    })  
    
        const category = useSelector(state=>state.category.value)
        // console.log(category);
    return(<>
            
            <div className="category">
                <div className="list-item">Danh Mục</div>
                <div className="item-show">
                    {category.map((i)=>(
                        <div key={i.id}>
                        <img src={i.url} alt=""  />
                        <span>{i.name}</span>
                    </div>
                    ))}
                </div>
            </div>
        </>)
}