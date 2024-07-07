import React from 'react'
import './Cpfusion.css'
import data_product from '../Assets/CPFusion/Cpfusion.js'
import Aliveitem from '../PtmtAlive/Aliveitem'
import cpfusionmain from '../Assets/bacground/cp-tarbo-bg.jpg'

const Cpusion = () => {
  return (
    <div className='cpfusionn'>
        <img src={cpfusionmain} alt=""  />
        <div className='cpfusion-text'>
        <h1>CP FUSION</h1>
        </div>
        <div className='cpfusionm'>
          <div className='cpfusion-main-right'>
            <h1>CP Faucets</h1>
            <b>1.	Qualified brass   </b><br /><br />
            <b>2.	Chrome plating done to ensure mirrir </b><br /><br />
            <b>3.	Qualified spindle</b><br /><br />
            <b>4.	Multi layer aerator </b><br /><br />
            <b>5.	Uniform thickness</b><br /><br />
            <b>6.	7 year warranty</b><br /><br />
            
          </div>
    <div className='cpfusion-main-left'>
    <div className='cpfusion-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Cpusion


