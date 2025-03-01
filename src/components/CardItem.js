import React from 'react';

function CardItem(properties) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__info'>
          <h3 className='cards__item__header'>{properties.header}</h3>
          <div className='cards__item__text'>{properties.text}</div>
        </div>
      </li>
    </>
  )
}

export default CardItem
