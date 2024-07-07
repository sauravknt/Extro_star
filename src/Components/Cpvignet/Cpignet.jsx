import React from 'react'
import './Cpvignet.css'
import data_product from '../Assets/CpVignet/Vignet.js'
import Aliveitem from '../PtmtAlive/Aliveitem'
import vignetmain from '../Assets/bacground/cp-vignet-bg.jpg'

const Cpignet = () => {
  return (
    <div className='vignetn'>
        <img src={vignetmain} alt=""  />
        <div className='vignet-text'>
        <h1>CP VIGNET</h1>
        </div>
        <div className='vignetm'>
          <div className='vignet-main-right'>
            <h1>CP Faucets</h1>
            <b>1.	Qualified brass   </b><br /><br />
            <b>2.	Chrome plating done to ensure mirrir </b><br /><br />
            <b>3.	Qualified spindle</b><br /><br />
            <b>4.	Multi layer aerator </b><br /><br />
            <b>5.	Uniform thickness</b><br /><br />
            <b>6.	7 year warranty</b><br /><br />
            
          </div>
    <div className='vignet-main-left'>
    <div className='vignet-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Cpignet


