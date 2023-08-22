import { Nav } from "../Login/nav/Nav"
import { Main } from "../Register/main/Main"
export function Register(){
    return(<>
    <Nav value="Đăng Ký"/>
    <Main value="Đăng Ký" text="Bạn đã có tài khoản" path="/login" page="Login"/> 
    </>)
}   