"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import publisher from "./index.module.scss"
import 'swiper/css/pagination';
const images = [
  "https://img.kitapyurdu.com/v1/getImage/fn:11790649/wi:120/wh:true",
  "https://img.kitapyurdu.com/v1/getImage/fn:11767484/wi:120/wh:true",
  "https://img.kitapyurdu.com/v1/getImage/fn:11767737/wi:120/wh:true",
  "https://img.kitapyurdu.com/v1/getImage/fn:11778809/wi:120/wh:true",
  "https://img.kitapyurdu.com/v1/getImage/fn:11781034/wi:120/wh:true",
  "https://img.kitapyurdu.com/v1/getImage/fn:11708106/wi:120/wh:true",
  "https://img.kitapyurdu.com/v1/getImage/fn:11631569/wi:120/wh:true"
]
export default function BooksWidget() {
  return (
    <main className='justify-content-center d-flex'>
      <div className='justify-content-center m-4 container'>
        <h3>Herkes bu ürünlerin peşinde</h3>
        <Swiper
          slidesPerView={5}
          spaceBetween={90}
          navigation={{
            enabled: true
          }}
          // className={"p-5"}
          modules={[Navigation]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((img) => (
            <SwiperSlide >
              <div className={publisher.card}>
                <div className={publisher.imageContainer}>
                  <img src={img} height={200} width={200} loading='lazy' alt='img' />
                </div>
                <h3>George Orwell</h3>
                <h6>Xiaoomi Redmi Watch 3</h6>
                <b>120.00 TL</b>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  )
}
