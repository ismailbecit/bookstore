"use client"
import React, { useEffect } from 'react'
import headerClass from "./index.module.scss"
import { BiBasket, BiChevronDown } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import AuthModal from '@/presentation/components/authModal'
import { register, setAuthInitial, setAuthToggle } from '@/redux/slices/auth'
import { Badge } from 'react-bootstrap'
import { setOrderInitial } from '@/redux/slices/order'
const Header = () => {
  const dispatch = useAppDispatch()
  const authSlice = useAppSelector((state) => state.auth)
  const orderCount = useAppSelector((state) => state.order.order.count)
  useEffect(() => {
    dispatch(setAuthInitial())
    dispatch(setOrderInitial())
  }, [])
  return (
    <>
      <nav>
        <div className='container d-flex justify-content-between align-items-center p-2'>
          <div className='mt-2 mb-2'>
            <Link href={"/"}>
              <img src='/assets/next.svg' height={30} />
            </Link>
          </div>

          <div className='d-flex gap-4 flex-grow-4' style={{ minWidth: 800 }}>
            <input placeholder='Kitap ara....' className='flex-grow-2 form-control w-100' type='search' /> {/* input için flex-grow-2 sınıfı */}
          </div>
          <div className='d-flex align-items-center gap-4'>
            {authSlice.user.isAuth && (
              <div className='position-relative'>
                <div className='position-absolute' style={{ right: -8, top: -8 }}>
                  <Badge style={{ fontSize: 10 }}>{orderCount}</Badge>
                </div>
                <div className='cursor-pointer'>
                  <BiBasket size={27} />
                </div>

              </div>
            )}
            <div className={`d-flex ${headerClass.authCard}`} onClick={() => !authSlice.user.isAuth && dispatch(setAuthToggle(true))}>
              <div>
                <AiOutlineUser size={30} />
              </div>
              <div className={`${headerClass.authCardtitle}`}>
                {authSlice.user.isAuth ? (
                  <>
                    {authSlice.user.name?.slice(0, 10)} <br />
                    <small>{authSlice.user.surname?.slice(0, 10)}</small>
                  </>
                ) : (
                  <>
                    Giriş Yap <br />
                    <small>üye ol</small>
                  </>
                )}
              </div>
              <div>
                <BiChevronDown />
              </div>
            </div>
          </div>
        </div>
        <div className={`bg-color-main w-100 p-3 d-flex justify-content-center gap-5 ${headerClass.subMenu}`} >
          <div>Kitap</div>
          <div>Ders Kitapları</div>
          <div>Dergi</div>
          <div>Bilgisayar</div>
          <div>Biliim Kurgu</div>
        </div>
      </nav >
      {authSlice.authToggle && <AuthModal />} *
    </>
  )
}

export default Header