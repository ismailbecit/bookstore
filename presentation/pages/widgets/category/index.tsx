"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import publisher from "./index.module.scss"
import 'swiper/css/pagination';
export default function CategoryWidget() {
  return (
    <main className='justify-content-center d-flex flex-wrap'>
      <div className='justify-content-center m-4  '>
        <img src='https://cdn.bkmkitap.com/Data/EditorFiles/kampanya_blok/ayin-yayinevleri/kasim_23/pegasus-yayinlari.webp' />
      </div>

      <div className='justify-content-center m-4  '>
        <img src='https://cdn.bkmkitap.com/Data/EditorFiles/kampanya_blok/ayin-yayinevleri/kasim_23/can-yayinlari.webp' />
      </div>

      <div className='justify-content-center m-4  '>
        <img src='https://cdn.bkmkitap.com/Data/EditorFiles/kampanya_blok/ayin-yayinevleri/kasim_23/ketebe-cocuk.webp' />
      </div>

      <div className='justify-content-center m-4  '>
        <img src='https://cdn.bkmkitap.com/Data/EditorFiles/kampanya_blok/ayin-yayinevleri/kasim_23/ithaki-yayinlari.webp' />
      </div>
    </main>
  )
}
