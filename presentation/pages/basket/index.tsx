import React from 'react'
import basketClass from "./index.module.scss"
import { AiFillDelete } from 'react-icons/ai'
const Basket = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-8">
          <h1 className='h4'>Sepetim (1 Ürün)</h1>
          <div className={`d-flex flex-column justify-content-center align-items-center ${basketClass.table} mt-4`}>
            {Array.from({ length: 30 }).map(() => (
              <div className={`d-flex gap-5 ${basketClass.tableContainer}`}>
                <div className={`${basketClass.tableItem} d-flex align-items-center gap-3`} style={{ width: 350 }}>
                  <div><img src='https://i.dr.com.tr/cache/82x82-0/originals/0002006539001-1.jpg' /></div>
                  <div>İsmaiasdasl Kitabı sdasds asasas  sa asasd.....</div>
                </div>
                <div style={{ width: 120 }}>
                  <div>2100.99 TL</div>
                </div>
                <div style={{ width: 180 }}>
                  <div className="d-flex">
                    <button>-</button>
                    <div>1</div>
                    <button>+</button>
                  </div>
                  <small className='text-sm d-flex align-items-center cursor-pointer' >
                    <AiFillDelete size={20} color={"gray"} />   <small>  Ürünü Kaldır</small>
                  </small>
                </div>
              </div>
            ))}
            <div className='d-flex justify-content-end w-100 cursor-pointer'>Tümünü Sil</div>
          </div>
        </div>
        <div className="col-md-4 mt-5">
          <div className='card p-4 gap-3'>
            <h2 className='h5'>Sipariş Özeti</h2>
            <div className={basketClass.cardItem}>
              <div>Sepet Toplamı: </div> <b>12.99 TL</b>
            </div>
            <div className={basketClass.cardItem}>
              <div>Ürünü Adedi: </div> <b>132 Adet</b>
            </div>
            <hr />
            <div className={basketClass.cardItem}>
              <div>Ödenecek Tutarı: </div> <b>12.99 TL</b>
            </div>
            <button className='btn bg-color-main text-white'>Alışverişi Tamamla</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Basket