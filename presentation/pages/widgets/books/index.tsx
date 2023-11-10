"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import publisher from "./index.module.scss"
import 'swiper/css/pagination';
import Link from 'next/link';
import { useEffect } from 'react';
import axios from 'axios';
import { IBook } from '@/redux/models/book';
import { IWidget } from '@/redux/models/widget';
type IBookWidget = {
  widget: IWidget
}
export default function BooksWidget({ widget }: IBookWidget) {
  return (
    <main className='justify-content-center d-flex'>
      <div className='justify-content-center m-4 container'>
        <h3>{widget.title}</h3>
        <Swiper slidesPerView={5} spaceBetween={90} navigation={{ enabled: true }} modules={[Navigation]}  >
          {widget.items?.map((item: IBook, index) => {
            const price = item.saleInfo.hasOwnProperty("listPrice") ? `${item.saleInfo?.listPrice?.amount} TL` : "Ücretsiz"
            return (
              <SwiperSlide >
                <Link href={`/b/${index}-${index}`}>
                  <div className={publisher.card}>
                    <div className={publisher.imageContainer}>
                      <img src={item.volumeInfo?.imageLinks?.thumbnail} height={200} width={200} loading='lazy' alt='img' />
                    </div>
                    <h3>{`${item.volumeInfo?.authors?.[0]?.slice(0, 20) || "Anonim"}`}</h3>
                    <h6>{`${item.volumeInfo?.title?.slice(0, 22)}...`}</h6>
                    <b>{price}</b>
                  </div>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </main>
  )
}
