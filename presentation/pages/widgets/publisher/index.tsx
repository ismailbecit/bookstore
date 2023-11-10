"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import publisher from "./index.module.scss"
import 'swiper/css/pagination';
export default function Publisher() {
  return (
    <main className='justify-content-center d-flex'>
      <div className='justify-content-center m-4 container'>
        <Swiper
          slidesPerView={10}
          autoplay={{ delay: 2500 }}
          lazy={true}
          // className={"p-5"}
          modules={[Autoplay]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Array.from({ length: 20 }).map(() => (
            <SwiperSlide >
              <div className={publisher.card}>
                <img src='https://img.kitapyurdu.com/v1/getImage/fn:10116914/wi:200/wh:30682d048' height={80} width={80} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  )
}
