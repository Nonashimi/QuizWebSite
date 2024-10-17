import React from 'react'
import "./Card.css";
const Card = ({index}) => {
  return (
    <div className='Card'>
        <div className="Card_block">
            <div className="Card_question">
               {index}. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iste.
            </div>
            <div className="line"></div>
            <div className="Card_answer">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa debitis eveniet dolorem officia?
            </div>
            <div className="Card_functions"></div>
        </div>
    </div>
  )
}

export default Card