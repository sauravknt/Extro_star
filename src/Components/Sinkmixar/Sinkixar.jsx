import React from 'react'
import './Sinkmixar.css'
import data_product from '../Assets/Sinkmixer/sinkmixar'
import Aliveitem from '../PtmtAlive/Aliveitem'
import cpfusionmain from '../Assets/bacground/sinkmixar.jpg'

const Sinkixar = () => {
  return (
    <div className='sinkmixern'>
    <img src={cpfusionmain} alt=""  />
    <div className='sinkmixar-text'>
    <h1>sink mixar</h1>
    </div>
    <div className='sinkmixerm'>
      <div className='sinkmixar-main-right'>
        <h1>sink mixar</h1>
        <b>1.	Luxurious  </b><br /><br />
        <b>2.	Unique design </b><br /><br />
        <b>3.	Multi flow adjustable</b><br /><br />
        <b>4.	Aerated sprays and flow restrictors </b><br /><br />
        <b>5.	sinkmixar Accessories</b><br /><br />
        <b>6.	Quality Assurance</b><br /><br />
        
      </div>
<div className='sinkmixar-main-left'>
<div className='sinkmixar-item' >
      {data_product.map((item,i)=>{
          return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
      })}
  </div>
</div>
</div>
</div>
  )
}

export default Sinkixar
