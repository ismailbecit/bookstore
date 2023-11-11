import React from 'react'
import { BiBasket } from 'react-icons/bi'

const EmptyBasket = () => {
  return (
    <div className='d-flex flex-column align-items-center gap-3 justify-content-center p-5 m-5 h5'>
      <BiBasket size={40} />
      <div >Sepetinizde Ürün Bulunmuyor</div>
    </div>
  )
}

export default EmptyBasket