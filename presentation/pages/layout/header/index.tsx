import React from 'react'
import headerClass from "./index.module.scss"
const Header = () => {
  return (
    <>
      <nav>
        <div className='container d-flex justify-content-between align-items-center'>
          <div className='mt-2 mb-2'>
            <img src='./favicon.ico' height={80} />
          </div>

          <div className='d-flex gap-4 flex-grow-4' style={{ minWidth: 800 }}>
            <input placeholder='Kitap ara....' className='flex-grow-2 form-control w-100' type='search' /> {/* input için flex-grow-2 sınıfı */}
          </div>

          <div className='d-flex'>
            <div>Giriş Yap <br /> <small>üye ol</small></div>
          </div>
        </div>
        <div className={`bg-color-main w-100 p-3 d-flex justify-content-center gap-5 ${headerClass.subMenu}`} >
          <div>Kitap</div>
          <div>Ders Kitapları</div>
          <div>Dergi</div>
          <div>Bilgisayar</div>
          <div>Biliim Kurgu</div>
        </div>
      </nav>
    </>
  )
}

export default Header