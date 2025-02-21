import React from 'react'
import { Link } from 'react-router-dom';

function ServiceItem(properties) {
  return (
    <>
      <li className='service__item'>
        <Link className='service__item__link' to={properties.path}>
          <img src={properties.src} alt='{properties.header}' className='service__item__img'/>
          <div className='service__item__info'>
            <h3 className='service__item__header'>{properties.header}</h3>
            <p className='service__item__text'>{properties.text}</p>
          </div>
        </Link>
      </li>
    </>
  )
}

export default ServiceItem
