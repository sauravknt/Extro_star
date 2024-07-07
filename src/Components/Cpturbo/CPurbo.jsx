import React from 'react'
import './Cpturbo.css'
import data_product from '../Assets/CpTurbo/turbo'
import Aliveitem from '../PtmtAlive/Aliveitem'
import turbomain from '../Assets/bacground/Turbobg1.png'

const Cpurbo = () => {
  return (
    <div className='turbo'>
        <img src={turbomain} alt=""  />
        <div className='tuebo-text'>
        <h1>CP TURBO</h1>
        </div>
        <div className='turbom'>
          <div className='tuebo-main-right'>
            <h1>CP Faucets</h1>
            <b>1.	Qualified brass   </b><br /><br />
            <b>2.	Chrome plating done to ensure mirrir </b><br /><br />
            <b>3.	Qualified spindle</b><br /><br />
            <b>4.	Multi layer aerator </b><br /><br />
            <b>5.	Uniform thickness</b><br /><br />
            <b>6.	7 year warranty</b><br /><br />
            
          </div>
    <div className='tuebo-main-left'>
    <div className='tuebo-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Cpurbo


