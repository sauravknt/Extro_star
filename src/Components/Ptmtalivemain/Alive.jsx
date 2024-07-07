import React from 'react'
import './Alive.css'
import data_product from '../Assets/PTMTAlive/alive'
import Aliveitem from '../PtmtAlive/Aliveitem'
import alivemain from '../Assets/bacground/ptmt-alive-bg.jpg'

const Alive = () => {
  return (
    <div className='alivemainn'>
        <img src={alivemain} alt=""  />
        <div className='alive-text'>
        <h1>PTMT ALIVE</h1>
        </div>
        <div className='alivem'>
          <div className='alive-main-right'>
            <h1>PTMT Faucets</h1>
            <b>1.	ISI certified Products </b><br /><br />
            <b>2.	SS 304 road inserted to provide durability</b><br /><br />
            <b>3.	Heat Insulated and resistant to high temperatures, UV radiation,<br /> and are non-corrosive</b><br /><br />
            <b>4.	Streamline parting</b><br /><br />
            <b>5.	Sustainable & Authentic Raw Materials</b><br /><br />
            <b>6.	Leakage free tested</b><br /><br />
            <b>7.	3 year warranty
              
</b>
          </div>
    <div className='alive-main-left'>
    <div className='alive-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Alive
