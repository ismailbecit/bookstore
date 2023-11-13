"use client"
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import bookClass from "./index.module.scss"
import { IBook } from '@/redux/models/book'
import Link from 'next/link'
import slugify from 'react-slugify'
type IBookList = {
  books: IBook[]
  categoryName: string
  isSearch: boolean
}
export const BookList = ({ books, categoryName, isSearch }: IBookList) => {
  return (
    <div className="container">
      <div className='row'>
        <h4 className='mb-5 mt-5'>{isSearch ? "Arama Sonuçları" : categoryName}</h4>
        <h4 />
        {books?.map((item: IBook, index) => {
          const price = item.saleInfo.hasOwnProperty("listPrice") ? `${item.saleInfo?.listPrice?.amount} TL` : "Ücretsiz"
          return (
            <div className="col-md-5 col-lg-4 col-xl-3">
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
            </div>
          )
        })}
      </div>
    </div>
  )
}
