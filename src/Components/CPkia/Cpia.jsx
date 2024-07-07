import React from 'react'
import './Cpkia.css'
import data_product from '../Assets/CPKia/Kia.js'
import Aliveitem from '../PtmtAlive/Aliveitem'
import kiamain from '../Assets/bacground/cp-kia-bg.jpg'

const Cpia = () => {
  return (
    <div className='kian'>
        <img src={kiamain} alt=""  />
        <div className='kia-text'>
        <h1>CP KIA</h1>
        </div>
        <div className='kiam'>
          <div className='kia-main-right'>
            <h1>CP Faucets</h1>
            <b>1.	Qualified brass   </b><br /><br />
            <b>2.	Chrome plating done to ensure mirrir </b><br /><br />
            <b>3.	Qualified spindle</b><br /><br />
            <b>4.	Multi layer aerator </b><br /><br />
            <b>5.	Uniform thickness</b><br /><br />
            <b>6.	7 year warranty</b><br /><br />
            
          </div>
    <div className='kia-main-left'>
    <div className='kia-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Cpia


