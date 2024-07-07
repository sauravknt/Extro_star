import React from 'react'
import './Cpmatrix.css'
import data_product from '../Assets/CpMatrix/Matrix.js'
import Aliveitem from '../PtmtAlive/Aliveitem'
import cpfusionmain from '../Assets/bacground/matrixbg1.jpg'
const Cpatrix = () => {
  return (
    <div className='cpmatrixn'>
    <img src={cpfusionmain} alt=""  />
    <div className='cpmatrix-text'>
    <h1>CP  Matrix</h1>
    </div>
    <div className='cpmatrixm'>
      <div className='cpmatrix-main-right'>
        <h1>CP Matrix</h1>
        <b>1.	Qualified brass   </b><br /><br />
        <b>2.	Chrome plating done to ensure mirrir </b><br /><br />
        <b>3.	Qualified spindle</b><br /><br />
        <b>4.	Multi layer aerator </b><br /><br />
        <b>5.	Uniform thickness</b><br /><br />
        <b>6.	7 year warranty</b><br /><br />
        
      </div>
<div className='cpmatrix-main-left'>
<div className='cpmatrix-item' >
      {data_product.map((item,i)=>{
          return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
      })}
  </div>
</div>
</div>
</div>
  )
}

export default Cpatrix
