"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import bookClass from "./index.module.scss"
import 'swiper/css/pagination';
import Link from 'next/link';
import { IBook } from '@/redux/models/book';
import { IWidget } from '@/redux/models/widget';
import slugify from 'react-slugify';
type IBookWidget = {
  widget: IWidget
}
export default function BooksWidget({ widget }: IBookWidget) {
  return (
    <main className='justify-content-center d-flex'>
      <div className='justify-content-center m-4 container'>
        <h3>{widget.title}</h3>
        <div className='d-flex justify-content-center'>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              540: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            navigation={{ enabled: true }}
            modules={[Navigation]}   >
            {widget.items?.map((item: IBook, index) => {
              const price = item.saleInfo.hasOwnProperty("listPrice") ? `${item.saleInfo?.listPrice?.amount} TL` : "Ücretsiz"
              return (
                <SwiperSlide >
                  <Link href={`/${slugify(item.volumeInfo?.title)}-b-${item.id}`}>
                    <div className={bookClass.card}>
                      <div className={bookClass.imageContainer}>
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
      </div>
    </main>
  )
}
