import React from 'react'
import left from  "../../assets/icons8-налево-100.png";
import right from "../../assets/icons8-направо-100.png";
import not_active_right from "../../assets/icons8-right-not.png";
import not_active_left from "../../assets/icons8-left-not.png";
const Pagination = ({cartPage, setCartPage, totalCartPage}) => {
  return (
    <div className="pagination">
        <div className={`pagination-turn ${cartPage === 0 ? "not-active" : ""}`} onClick={() => setCartPage(cartPage - 1)}>
          <img src={cartPage === 0 ? not_active_left :left} className='img-turn' alt="" />
        </div>
        <div className="pagination-number">{cartPage + 1} / {totalCartPage}</div>
        <div className={`pagination-turn ${cartPage == (totalCartPage - 1) ? "not-active" : ""}`} onClick={() => setCartPage(cartPage + 1)}>
          <img src={cartPage === (totalCartPage - 1) ? not_active_right :right} className='img-turn' alt="" />
        </div>

      </div>
  )
}

export default Pagination