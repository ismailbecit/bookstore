"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import bannerClass from "./index.module.scss"
import 'swiper/css/pagination';
import { IBannerWidget } from '@/redux/models/widget';
type IBanner = {
  bannerWidget: IBannerWidget
}
export default function Banner({ bannerWidget }: IBanner) {
  return (
    <main >
      <div className='justify-content-center m-4'>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true, clickableClass: "mt-5" }}
          navigation={{ enabled: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className={bannerClass.bannerContainer}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {bannerWidget.items?.map((banner) => (
            <SwiperSlide >
              <img src={banner.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main >
  )
}
