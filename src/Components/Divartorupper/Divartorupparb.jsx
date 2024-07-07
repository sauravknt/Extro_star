import React from 'react'
import './Divartor.css'
import data_product from '../Assets/divertor/divartor'
import Aliveitem from '../PtmtAlive/Aliveitem'
import cpfusionmain from '../Assets/bacground/upperBanner.jpg'

const Divartorupparb = () => {
  return (
    <div className='divartorupn'>
    <img src={cpfusionmain} alt=""  />
    <div className='divartorup-text'>
    <h1>DIVERTOR UPPER PART</h1>
    </div>
    <div className='divartorupm'>
      <div className='divartorup-main-right'>
        <h1>DIVERTOR UPPER PART</h1>
        <b>1.	Luxurious  </b><br /><br />
        <b>2.	Unique design </b><br /><br />
        <b>3.	Multi flow adjustable</b><br /><br />
        <b>4.	Aerated sprays and flow restrictors </b><br /><br />
        <b>5.	divartorup Accessories</b><br /><br />
        <b>6.	Quality Assurance</b><br /><br />
        
      </div>
<div className='divartorup-main-left'>
<div className='divartorup-item' >
      {data_product.map((item,i)=>{
          return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
      })}
  </div>
</div>
</div>
</div>
  )
}

export default Divartorupparb
