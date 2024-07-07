import React from 'react'
import './Ppfusion.css'
import data_product from '../Assets/PPFusion/PPfusion'
import Aliveitem from '../PtmtAlive/Aliveitem'
import fusionmain from '../Assets/bacground/pp-fusion-bg.jpg'

const Ppusion = () => {
  return (
    <div className='fusionn'>
        <img src={fusionmain} alt=""  />
        <div className='fusion-text'>
        <h1>PP FUSION</h1>
        </div>
        <div className='fusionm'>
          <div className='fusion-main-right'>
            <h1>PP Faucets</h1>
            <b>1.	Cost effective  </b><br /><br />
            <b>2.	Leakage free tested</b><br /><br />
            <b>3.	Light weight</b><br /><br />
            <b>4.	Authentic PP material </b><br /><br />
            <b>5. Streamline parting</b><br /><br />
            <b>6.	1 year warranty</b><br /><br />
            
          </div>
    <div className='fusion-main-left'>
    <div className='fusion-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Ppusion



