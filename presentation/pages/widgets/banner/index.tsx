"use client"
import Image from 'next/image'
import styles from '../page.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import bannerClass from "./index.module.scss"
import 'swiper/css/pagination';
export default function Banner() {
  return (
    <main >
      <div className='justify-content-center m-4'>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true, clickableClass: "mt-5" }}
          navigation={{ enabled: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className={bannerClass.bannerContainer}
          modules={[Pagination, Navigation, Autoplay]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide >
            <img src='https://img.kitapyurdu.com/v1/getImage/fn:11771066/wi:940/wh:f3f0667a4' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://img.kitapyurdu.com/v1/getImage/fn:11767777/wi:940/wh:13369f655' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://img.kitapyurdu.com/v1/getImage/fn:11580074/wi:940/wh:33860d57c' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://img.kitapyurdu.com/v1/getImage/fn:11771066/wi:940/wh:f3f0667a4' />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  )
}
