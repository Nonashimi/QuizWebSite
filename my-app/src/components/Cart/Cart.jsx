import React, { useState } from 'react'
import "./Cart.css";
const Cart = () => {
    const [isClick, setIsClick] = useState(false);
  return (
    <div>
        <div className="card_block" onClick={() => setIsClick(!isClick)}>
            <div className={`card_data ${isClick ? "turn_to_answer" : ""}`}>
                <div className="card-front">
                  123.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, sed. Lorem ipsum dolor sit amet.</div>
                <div className="card-back"> Deserunt, sed.</div>
            </div>
        </div>
    </div>
  )
}

export default Cart