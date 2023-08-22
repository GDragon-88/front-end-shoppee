import { Navbar } from "../Navbar/Navbar"
import { Container } from "./Container/Container"
import { Description } from "./Description/Description"
import { Comment } from "./Comment/Comment"
export function Detail(){
    return (<>
        <Navbar/>
        <Container/>
        <Description/>
        <Comment/>
    </>)
}