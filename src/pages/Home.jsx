import React from 'react'
import StyledTree from './../components/StyledTree';
import Basic from '../components/CategoryList';
import { categories } from './../data';
import '../styles/home.css'

const Home = () => {
  return ( 
    <div className='home'>
      <div className="background"></div>
      <div className="content">
        <div className='navbar'>SPRIH</div>
        <StyledTree/>
        <div className='p-4'></div>
      </div>
      
    </div>
  )
}

export default Home