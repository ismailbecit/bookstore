"use client"
import React, { useEffect, useState } from 'react'
import detailClass from "./index.module.scss"
import { Button } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { addOrder } from '@/redux/slices/order'
import { resetAuthStatus, setAuthToggle } from '@/redux/slices/auth'
export const BookDetail = () => {
  const authSlice = useAppSelector((state) => state.auth)
  const [addOrderClick, setAddOrderClick] = useState(false)
  const selectedProduct = { id: "21", name: "deneme" }
  const dispatch = useAppDispatch()
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
    <div className='container'>
      <div className='row'>
        <div className='col-md-7'>
          <img src='https://productimages.hepsiburada.net/s/35/222-222/10459012661298.jpg/format:webp' width={600} />
        </div>

        <div className='col-md-5 mt-50'>
          <div className={detailClass.title}>
            <h1>History Swich BOoksas sd aaas asasasaasasas da asd</h1>
            <h3>History Swich BOoks</h3>
            <h4 className={detailClass.price}>259.99 TL</h4>
            <div className={detailClass.featuredInformation}>
              <div className='mt-50 m-5 mb-0 text-center' style={{ fontSize: 22, fontWeight: 400 }}>Öne Çıkan Bilgiler</div>
              <hr />
              <div className='container mt-3 '>
                <div className='row gap-2 d-flex justify-content-center'>
                  <div className="col-md-5">
                    <div> Hamur Tipi: 2 Hamur </div>
                    <div>İlk Baskı Yılı: 2023</div>
                  </div>
                  <div className="col-md-5">
                    <div>Dil: Türkçe</div>
                    <div>Ebat: 13,5 x 21</div>
                  </div>
                  <div className="col-md-5">
                    <div>Dil: Türkçe</div>
                    <div>Ebat: 13,5 x 21</div>
                  </div>
                  <div className="col-md-5">
                    <div>Dil: Türkçe</div>
                    <div>Ebat: 13,5 x 21</div>
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
