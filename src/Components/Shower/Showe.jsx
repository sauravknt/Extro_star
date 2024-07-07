import React from 'react'
import './Shower.css'
import data_product from '../Assets/Shower/shower'
import Aliveitem from '../PtmtAlive/Aliveitem'
import cpfusionmain from '../Assets/bacground/showerbg.jpg'

const Showe = () => {
  return (
    <div className='showern'>
    <img src={cpfusionmain} alt=""  />
    <div className='shower-text'>
    <h1>SHOWER</h1>
    </div>
    <div className='showerm'>
      <div className='shower-main-right'>
        <h1>SHOWER</h1>
        <b>1.	Luxurious  </b><br /><br />
        <b>2.	Unique design </b><br /><br />
        <b>3.	Multi flow adjustable</b><br /><br />
        <b>4.	Aerated sprays and flow restrictors </b><br /><br />
        <b>5.	Shower Accessories</b><br /><br />
        <b>6.	Quality Assurance</b><br /><br />
        
      </div>
<div className='shower-main-left'>
<div className='shower-item' >
      {data_product.map((item,i)=>{
          return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
      })}
  </div>
</div>
</div>
</div>
  )
}

export default Showe
