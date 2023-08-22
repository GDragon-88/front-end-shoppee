import { Nav } from "./nav/Nav"
import { Main } from "./main/Main"

export function Login(){
    return(<>
       <Nav value="Đăng Nhập"/>
       <Main value="Đăng Nhập" path="/register" text='Bạn chưa có tài khoản?' page="Register"/>
       
    </>)
}