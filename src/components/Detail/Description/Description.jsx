import "./style.css"
import { Descriptions } from 'antd'
import {useSelector} from "react-redux"
export function Description() {
    const [product] = useSelector(state=> state.detail.value)
    return (<>
        <div className="description">
            <div>
                <Descriptions
                    title="MÔ TẢ SẢN PHẨM"
                    bordered
                    column={{
                        xxl: 4,
                        xl: 3,
                        lg: 3,
                        md: 3,
                        sm: 2,
                        xs: 1,
                    }}
                >
                    <Descriptions.Item label="CHI TIẾT SẢN PHẨM" >
                    </Descriptions.Item>

                </Descriptions>
            </div>
            <div className="description-text">
                <pre>
                    {product ? product.description : ""}
                </pre>
            </div>
        </div>
    </>)
}