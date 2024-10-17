import React from 'react'
import Cart from './Cart'

const CartsList = ({totalPage}) => {
  return (
    <div className="Carts">
      <div className="Carts_data" style={{ transform: `translateX(-${totalPage}px)` }}>
      {[...Array(3)].map((_, index) => (
    <Cart key={index} />
      ))}
      </div>
      </div>
  )
}

export default CartsList