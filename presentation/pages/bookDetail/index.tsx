"use client"
import React, { useEffect, useState } from 'react'
import detailClass from "./index.module.scss"
import { Button } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { addOrder } from '@/redux/slices/order'
import { resetAuthStatus, setAuthToggle } from '@/redux/slices/auth'
import { IBook } from '@/redux/models/book'
import parse from 'html-react-parser';
import moment from 'moment'
type IBookDetail = {
  book: IBook
}
export const BookDetail = ({ book }: IBookDetail) => {
  const authSlice = useAppSelector((state) => state.auth)
  const orderSlice = useAppSelector((state) => state.order)
  const [addOrderClick, setAddOrderClick] = useState(false)
  const selectedProduct = { id: book.id, title: book.volumeInfo?.title, qty: 1, price: book.saleInfo.listPrice?.amount ?? 0, img: book.volumeInfo.imageLinks.thumbnail }
  const dispatch = useAppDispatch()
  const price = book.saleInfo.hasOwnProperty("listPrice") ? `${book.saleInfo?.listPrice?.amount} TL` : "Ücretsiz"
  const addOrderHandler = () => {
    if (authSlice.user.isAuth) {
      dispatch(addOrder(selectedProduct))
    } else {
      setAddOrderClick(true)
      dispatch(setAuthToggle(true))
    }
  }
  useEffect(() => {
    if (authSlice.status === "success" && addOrderClick) {
      dispatch(addOrder(selectedProduct))
      dispatch(resetAuthStatus())
      setAddOrderClick(false)
    }
  }, [authSlice.status])
  return (
    <div className='container mb-5'>
      <div className='row'>
        <div className='col-md-12 col-lg-7 d-flex justify-content-center justify-content-lg-start'>
          <img className={detailClass.image} src={book.volumeInfo?.imageLinks?.medium} loading='eager' />
        </div>
        <div className='col-md-12 col-lg-5 mt-50'>
          <div className={detailClass.title}>
            <h1>{book.volumeInfo?.title}</h1>
            <h3>{book.volumeInfo?.authors?.[0]}</h3>
            <h4 className={detailClass.price}>{price}</h4>
            <div className={detailClass.featuredInformation}>
              <div className='mt-50 m-5 mb-0 text-center' style={{ fontSize: 22, fontWeight: 400 }}>Öne Çıkan Bilgiler</div>
              <hr />
              <div className='container mt-3 '>
                <p className='mb-5'>{book.volumeInfo?.description && parse(book.volumeInfo?.description?.slice(0, 500))}</p>
                <div className='row gap-2 d-flex justify-content-center'>
                  <div className="col-md-5">
                    <div> Sayfa Sayısı: {book.volumeInfo?.pageCount} </div>
                  </div>
                  <div className="col-md-5">
                    <div>Tarih: {moment(book.volumeInfo?.publishedDate).format("DD.MM.YYYY")}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`d-flex justify-content-center mt-5 w-100 ${detailClass.buttonContainer}`}>
              <Button className='w-100 form-control bg-color-main text-white p-2' onClick={() => addOrderHandler()}>Sepete Ekle</Button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
