import React, { useState } from 'react'
import "./Cart.css";
const Cart = ({id, question, answer}) => {
    const [isClick, setIsClick] = useState(false);
  return (
    <div>
        <div className="card_block" onClick={() => setIsClick(!isClick)}>
            <div className={`card_data ${isClick ? "turn_to_answer" : ""}`}>
                <div className="card-front">
                  {id}. 
                  {question}</div>
                <div className="card-back">{answer}</div>
            </div>
        </div>
    </div>
  )
}

export default Cart