import React from 'react'

const Footer = () => {
  return (
    <div>
  <footer className="bg-body-tertiary text-center p-2 m-6">
    {/* Grid container */}
    <div className="container pb-0">
      {/* Section: Social media */}
      <section className="mb-4 p-2">
        {/* Google */}
        <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#dd4b39'}} href="https://www.sprih.com/" role="button"><i className="fab fa-google" /></a>
        {/* Instagram */}
        <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#ac2bac'}} href="https://www.instagram.com/_sprih_/" role="button"><i className="fab fa-instagram" /></a>
        {/* Linkedin */}
        <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#0082ca'}} href="https://www.linkedin.com/company/sprih/?originalSubdomain=in" role="button"><i className="fab fa-linkedin-in" /></a>
        {/* Github */}
        <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#333333'}} href="https://github.com/SULABH11" role="button"><i className="fab fa-github" /></a>
      </section>
      {/* Section: Social media */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div className="text-center" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)', textDecorationColor: "black", fontWeight: "bold"}}>
      © 2024 Copyright: All rights reserved 
    </div>
  </footer>
</div>
  )
}

export default Footer
