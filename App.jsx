import React, { useState } from 'react';
import './App.css';
import myImage from './assets/imageee.jpeg'
const App = () => {

  return (
    <div className="App">
      <div className='color'>
      </div>
      <div className='color2'>
      <h3 className='h3'>Sign up</h3>
      <p className='p'>Already have account? </p>
      <label className='name' htmlFor="">Name</label>
      <input type="Name"placeholder='Enter your name' className='input' />
      <br />
      <br />
      <label className='email' htmlFor="">Email id</label>
      <input className='Email' type="Email"placeholder='Enter your email here' />
      <br />
      <br />
      <label className='password' htmlFor="">Password</label>
      <input type="text" name="" id="" placeholder='Enter your password' className='Password' />
      <br />
      <br />
      <p className='p2'>by signing up you agree to recive updates and special offers</p>
      <button className='button'>Submit</button>
      <img className='img' src={myImage} alt="My Image" />
      </div>
    </div>
  );
};

export default App;
