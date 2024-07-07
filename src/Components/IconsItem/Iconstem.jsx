import React from 'react'
import './IconsItem.css'

const Iconstem = (props) => {
  return (
    <div className='itemic'>
        <img src={props.image} alt="" className='icon-img' />
        <p>{props.name}</p>
        {/*<div className="item-prices">
            <div className="item-price-new">
                   {props.new_price}
            </div>
            <div className="item-price-old">
                   {props.old_price}
            </div>
  </div>*/}
      
    </div>
  )
}

export default Iconstem
