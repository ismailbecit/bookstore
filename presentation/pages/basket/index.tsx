"use client"
import React from 'react'
import basketClass from "./index.module.scss"
import { AiFillDelete } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { orderDecrease, orderIncrease, removeBasketItem, resetOrderSlice } from '@/redux/slices/order'
const Basket = () => {
  const dispatch = useAppDispatch()
  const orderSlice = useAppSelector((state) => state.order)
  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-8">
          <h1 className='h4'>Sepetim ({orderSlice.order.count} Ürün)</h1>
          <div className={`d-flex flex-column justify-content-center align-items-center ${basketClass.table} mt-4`}>
            {orderSlice.order?.products?.map((item) => (
              <div className={`d-flex gap-5 ${basketClass.tableContainer}`}>
                <div className={`${basketClass.tableItem} d-flex align-items-center gap-3`} style={{ width: 350 }}>
                  <div><img src={item.img} height={80} /></div>
                  <div>{item.title}</div>
                </div>
                <div style={{ width: 80 }}>
                  <div>{item.price} TL</div>
                </div>
                <div style={{ width: 120 }}>
                  <div className={`d-flex ${basketClass.orderCount}`}>
                    <span onClick={() => dispatch(orderDecrease(item.id))}>-</span>
                    <span className={`${basketClass.line}`}></span>
                    <label>{item.qty}</label>
                    <span className={`${basketClass.line}`}></span>
                    <span onClick={() => dispatch(orderIncrease(item.id))}>+</span>
                  </div>
                </div>
                <small className='text-sm d-flex align-items-center cursor-pointer' style={{ width: 90 }} onClick={() => dispatch(removeBasketItem(item.id))}>
                  <AiFillDelete size={20} color={"gray"} />   <small>  Ürünü Kaldır</small>
                </small>
              </div>
            ))}
            <div className='d-flex justify-content-end w-100 cursor-pointer' onClick={() => dispatch(resetOrderSlice())}>Tümünü Sil</div>
          </div>
        </div>
        <div className="col-md-12 col-lg-3 mt-5">
          <div className='card p-4 gap-3'>
            <h2 className='h5'>Sipariş Özeti</h2>
            <div className={basketClass.cardItem}>
              <div>Sepet Toplamı: </div> <b>{orderSlice.order.total?.toFixed(2)} TL</b>
            </div>
            <div className={basketClass.cardItem}>
              <div>Ürünü Adedi: </div> <b>{orderSlice.order.count} Adet</b>
            </div>
            <hr />
            <div className={basketClass.cardItem}>
              <div>Ödenecek Tutarı: </div> <b>{orderSlice.order.total?.toFixed(2)} TL</b>
            </div>
            <button className='btn bg-color-main text-white'>Alışverişi Tamamla</button>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Basket