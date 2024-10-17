import React from 'react'
import Card from './Card'

const CardsList = () => {
  return (
    <div className="">
        {Array.from({ length: 4 }, (_, index) => (
            <Card key={index} index = {index + 1}/>
        ))}
    </div>
  )
}

export default CardsList