import React from 'react'

const info = ({title, description}) => {
  return (
    <div className='cartEmpty d-flex align-center justify-center flex-column flex'> 
    <img
    className='mb-20'
    width="120px"
   height="120px"
   src='/img/empty-cart.jpg'
   alt='Empty'
      />
      <h2>{title}</h2>
      <p className='opacity-6'>{description}</p>
      <button onClick={onClick} className="greenButton">
        <img src='/img/arrow.svg' alt='Arrow' />
        Вернуться назад
      </button>
    </div>
  )
}

export default info
