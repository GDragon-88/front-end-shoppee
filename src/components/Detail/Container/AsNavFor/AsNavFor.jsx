
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./style.css"
import {useSelector} from "react-redux"
export function AsNavFor() {
  const [product] = useSelector(state=> state.detail.value)
  return (
    <>
      <div className='detail-img'>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={product ? product.url.length: ''}
        >
          <Slider >
            
            {product? product.url.map((i,index)=>(
              <Slide index={index} className='detail-item' key={index}>
              <img src={i.link} alt='' />
            </Slide>
            )): ""}
          </Slider>
          <ButtonBack className='btn-back'>Back</ButtonBack>
          <ButtonNext className='btn-next'>Next</ButtonNext>
        </CarouselProvider>
      </div>
      <div className="detail-img-item">
        {product ? product.url.map((i,index)=>(
          <div className="detail-img-item-child" key={index}>
          <img src={i.link} alt="" />
      </div>
        )) : ''}
      </div>
      <div className='detail-left-social'>
            <div className='social'>
              <span>Share</span>:
              <img src='../Facebook_Logo_(2019).png.webp' alt=''/>
              <img src='../pinterest-logo-1024x576-removebg-preview.png' alt=''/>
              <img src='../tiwter.png' alt=''/>
            </div>
            <div className='like'>
            <i className="fa-regular fa-heart"></i> <span>like(710)</span>
            </div>
      </div>


    </>



  )
}