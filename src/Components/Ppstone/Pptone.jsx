import React from 'react'
import './Ppstone.css'
import data_product from '../Assets/PPStone/Ppstone'
import Aliveitem from '../PtmtAlive/Aliveitem'
import stonemain from '../Assets/bacground/pp-stone-bg.jpg'

const Pptone = () => {
  return (
    <div className='stonen'>
        <img src={stonemain} alt=""  />
        <div className='stone-text'>
        <h1>PP STONE</h1>
        </div>
        <div className='stonem'>
          <div className='stone-main-right'>
            <h1>PP Faucets</h1>
            <b>1.	Cost effective  </b><br /><br />
            <b>2.	Leakage free tested</b><br /><br />
            <b>3.	Light weight</b><br /><br />
            <b>4.	Authentic PP material </b><br /><br />
            <b>5. Streamline parting</b><br /><br />
            <b>6.	1 year warranty</b><br /><br />
            
          </div>
    <div className='stone-main-left'>
    <div className='stone-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Pptone


