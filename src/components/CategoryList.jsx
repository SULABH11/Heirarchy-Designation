import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Basic({item}) {
  const navigate = useNavigate();

  return (
 <section className="container mt- d-flex justify-content-center align-items-center" style={{backgroundColor: '#9de2ff'}}>
  <div className="container py-3 h-100 white-box d-flex justify-content-center align-items-center position-relative">  
        <div className="w-100 d-flex justify-content-center align-items-center img">
          <img src="http://source.unsplash.com/120x120/?girl" alt="Profile" className="img-fluid" style={{width: 110}} />
        </div>
        <div className="text w-100">
          <h5 className="">{item.firstName} {item.lastName}</h5>
          <p className="" style={{color: '#2b2a2a'}}>{item.designation}</p>
          <div className='card-contect'>
            <p className="" style={{color: '#2b2a2a'}}>Contact: {item.contactNumber}</p>
            <h6 className="" style={{color: '#2b2a2a'}}>{item.email}</h6>
          </div>
          
          
          <div className="  d-flex pt-1">
            <button type="button" className="btn btn-primary flex-grow-1" onClick={() => navigate(`/profile/${item.id}`)} >More Details</button>
          </div> 
        </div> 
    </div> 
</section>

  )}