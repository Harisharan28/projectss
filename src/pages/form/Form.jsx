import React from 'react'
import './form.css'
import  Img  from '../../images/dr_ezra_sargunam.jpg'
function Form() {
  return (
    <>
    <div className='container'>
      <div className="headline">
        <img src={Img} alt='image' className='img'/>
        </div>
      <div className="form">
        <form >
          <div>
          <h2 className='head'>PRAYER</h2>
          <input type="text" placeholder='First Name'className='namein inp' />
          <input type="text" placeholder='Last Name'  className='namein inp'/>
          <input type="email" placeholder='Email' className='inp' />
          <input type="number" placeholder='Phone Number' className='inp' />
          <textarea type="text" placeholder='Enter your prayer' className='inp' />
          </div>
          <div className='button'>
          <button className='butt' type='submit'>Send</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Form