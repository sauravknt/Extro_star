import React from 'react'
import './Ptmtstone.css'
import data_product from '../Assets/PTMTStone/PTMTstone.js'
import Aliveitem from '../PtmtAlive/Aliveitem'
import fusionmain from '../Assets/bacground/PTMT-stone-bg.jpg'

const Ptmttone = () => {
  return (
    <div className='ptmtstonen'>
        <img src={fusionmain} alt=""  />
        <div className='ptmtstone-text'>
        <h1>PTMT STONE</h1>
        </div>
        <div className='ptmtstonem'>
          <div className='ptmtstone-main-right'>
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
    <div className='ptmtstone-main-left'>
    <div className='ptmtstone-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Ptmttone
