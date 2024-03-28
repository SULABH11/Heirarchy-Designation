import React from 'react'
import StyledTree from './../components/StyledTree';
import Navbar from './Navbar'
import '../styles/home.css'
import Footer from './Footer';

const Home = () => {
  return ( 
    <>
    <div className="background"></div>
    <Navbar />
      <div className="content">
        <StyledTree/>
      </div>
      <br />
      <Footer />

    </>
  )
}

export default Home