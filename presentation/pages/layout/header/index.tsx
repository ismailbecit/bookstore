"use client"
import React, { useEffect, useState } from 'react'
import headerClass from "./index.module.scss"
import { BiBasket, BiChevronDown } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import AuthModal from '@/presentation/components/authModal'
import { register, setAuthInitial, setAuthToggle } from '@/redux/slices/auth'
import { Badge } from 'react-bootstrap'
import { setOrderInitial } from '@/redux/slices/order'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { getCategories } from '@/redux/service/csr/categoryAPI'
import { ICategory } from '@/redux/models/category'
const Header = () => {
  const dispatch = useAppDispatch()
  const authSlice = useAppSelector((state) => state.auth)
  const orderCount = useAppSelector((state) => state.order.order.count)
  const [categories, setCategories] = useState<ICategory[]>()
  const [search, setSearch] = useState("")
  const router = useRouter()
  const a = useParams()
  useEffect(() => {
    dispatch(setAuthInitial())
    dispatch(setOrderInitial())
    getCategories().then((res) => setCategories(res as ICategory[]))
  }, [])

  return (
    <main className='mb-5'>
      <nav>
        <div className='container d-flex justify-content-between align-items-center p-2 gap-4'>
          <div className='mt-2 mb-2'>
            <Link href={"/"}>
              <img src='/assets/next.svg' height={30} />
            </Link>
          </div>

          <div className='d-flex gap-4 flex-grow-4 w-100 d-none d-lg-block'>
            <input value={search} placeholder='Kitap ara....' className='flex-grow-2 form-control w-100' type='search' onChange={(e) => setSearch(e.target.value)} onKeyPress={(e) => {
              if (e.key === 'Enter') {
                console.log("enter")
                router.push(`/s/${search}`)
                setSearch("")
              }
            }} />
          </div>
          <div className='d-flex align-items-center gap-4'>
            {authSlice.user.isAuth && (
              <div className='position-relative' onClick={() => router.push("/sepetim")}>
                <div className='position-absolute' style={{ right: -8, top: -8 }}>
                  <Badge style={{ fontSize: 10 }}>{orderCount}</Badge>
                </div>
                <div className='cursor-pointer'>
                  <BiBasket size={27} />
                </div>
              </div>
            )}
            <div className={`d-md-flex ${headerClass.authCard} ${authSlice.user?.isAuth ? "d-none" : "d-flex"}`} onClick={() => !authSlice.user.isAuth && dispatch(setAuthToggle(true))}>
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
        <div className={`bg-color-main w-100 p-3 d-flex justify-content-md-center ${headerClass.subMenu}`} style={{ overflow: "auto" }} >
          {categories?.map((item: ICategory) => (
            <Link href={`/b/${item.slug}`} className='text-white'>
              <div>{item.name}</div>
            </Link>
          ))}
        </div>
      </nav >
      <div>
        {authSlice.authToggle && <AuthModal />}
      </div>
    </main>
  )
}

export default Header