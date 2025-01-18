import React from 'react'
import Cart from './Cart'

const CartsList = ({data, totalPage}) => {
  return (
    <div className="Carts">
      <div className="Carts_data" style={{ transform: `translateX(-${totalPage}px)` }}>
      {data.map(i => 
        <Cart key={i.id} id = {i.id} question = {i.question} answer = {i.answer}/>
      )}
      </div>
      </div>
  )
}

export default CartsList