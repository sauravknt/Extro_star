import React from 'react'
import './Pproyal.css'
import data_product from '../Assets/PPRoyal/Pproyal'
import Aliveitem from '../PtmtAlive/Aliveitem'
import fusionmain from '../Assets/bacground/pp-royle-bg.jpg'

const Ppoyal = () => {
  return (
    <div className='royaln'>
        <img src={fusionmain} alt=""  />
        <div className='roual-text'>
        <h1>PP ROYAL</h1>
        </div>
        <div className='royalm'>
          <div className='roual-main-right'>
            <h1>PP Faucets</h1>
            <b>1.	Cost effective  </b><br /><br />
            <b>2.	Leakage free tested</b><br /><br />
            <b>3.	Light weight</b><br /><br />
            <b>4.	Authentic PP material </b><br /><br />
            <b>5. Streamline parting</b><br /><br />
            <b>6.	1 year warranty</b><br /><br />
            
          </div>
    <div className='roual-main-left'>
    <div className='roual-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Ppoyal




