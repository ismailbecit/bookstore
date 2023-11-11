"use client"
import Basket from '@/presentation/pages/basket'
import EmptyBasket from '@/presentation/pages/basket/components/emptyBasket'
import { useAppSelector } from '@/redux/store'
import React from 'react'

const BasketPage = () => {
  const orderSlice = useAppSelector((state) => state.order)
  return (
    <>
      {orderSlice.order?.products?.length > 0 ? <Basket /> : <EmptyBasket />}
    </>
  )
}

export default BasketPage