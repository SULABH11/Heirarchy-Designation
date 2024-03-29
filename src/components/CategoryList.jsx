import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Basic({item}) {
  const navigate = useNavigate();

  return (
  <section className="container d-flex justify-content-center align-items-center" style={{backgroundColor: '#d8bfd8'}} >
  <div className="container py-3 h-100 white-box d-flex justify-content-center align-items-center position-relative">  
  
    <div className="w-100 d-flex justify-content-center align-items-center img">
          <img src={item.imageUrl} alt="Profile" className="img-fluid" style={{width: 110}} />
        </div>
        <div className="text w-100">
          <h5 className="" style={{fontWeight: "bold"}}>{item.firstName} {item.lastName}</h5>
          <p className="" style={{color: '#2b2a2a'}}>{item.designation}</p>         
          
          <div className="  d-flex pt-1">
            <button type="button" className="btn flex-grow-1" style={{backgroundColor: "#e4c4d5"}} onClick={() => navigate(`/profile/${item.id}`)} >More Details</button>
          </div> 
        </div> 
    </div> </section>
  )}
