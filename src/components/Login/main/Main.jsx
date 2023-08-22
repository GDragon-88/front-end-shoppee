import "./style.css"
import {Link}  from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Footer } from "../../Footer/Footer";


export function Main(props) {
    const data=props.value   
    const path = props.path;
    const text = props.text
    const value = props.page;
    const navigate= useNavigate();
    let valueUrl = window.location.href.substring(33)
    
    
    
    
    return (<>
        <div className="main">
            <div className="main-img">
                <img src="https://cf.shopee.vn/file/5569eb9dc7e09e2dbed5315b8f2ea8ba" alt="" />
            </div>
            <div className="main-input">
                <div className="main-input-content"> 
                    <span>{data}</span>
                </div>
                <div className="main-input-form">
                <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Bạn cần nhập Email';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Email sai đinh dang';
         }
         if(!values.password){
            errors.password="bạn cần nhập password"
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
            fetch("http://localhost:8081/login",{
              method:"POST",
              body:JSON.stringify(values, null, 2),
              headers:{'Content-Type': 'application/json'}
            }).then(res=>res.json())
            .then(data=>{
              let token = data.value;
          const d = new Date();
            d.setTime(d.getTime() + 90 * 24 * 60 * 60 * 1000);
            let expires = "expires=" + d.toUTCString();
            document.cookie = "userId = " + token + ";" + expires + ";path=/";
            }).then(()=>{
              if(valueUrl){
                navigate(`/detail/${valueUrl}`)
              }else{
                  navigate("/")
              }
            })
            .catch((err)=>{
              console.log(err);
            })
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="email" name="email" placeholder='Email' />
           <ErrorMessage name="email" component="div"  className="erros"/>
           <Field type="password" name="password" placeholder="password"/>
           <ErrorMessage name="password" component="div"  className="erros"/>
           <button type="submit" disabled={isSubmitting}>
             {data}
           </button>
         </Form>
       )}
     </Formik>
                </div>
                <span id="choice">Hoặc</span>
                <div className="btn">
                    <div className="btn-item">
                        <img src="../Facebook_Logo_(2019).png.webp" alt=""/>
                        <p>Facebook</p>
                    </div>
                    <div className="btn-item">
                    <img src="../google.png" alt=""/>
                    <p>Google</p>
                    </div>
                    <div className="btn-item">
                    <img src="../Apple-Logo.png" alt=""/>
                    <p>Apple</p>
                    </div>
                </div>
                <div className="notice">
                    <span>{text}</span> <Link to={path} >{value}</Link>
                </div>
            </div>
            <div className="footer">  
                <Footer/>
            </div>
            
        </div>

    </>)
}