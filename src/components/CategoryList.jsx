import React, { useEffect, useState } from 'react';
import Profile from './Profile';

export default function Basic({item}) {
  const [count, setCount] = useState({});

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    <Profile item = {count}/>
  }, [count, item]);

  return (
 <section className="container col-md-5 mt-5" style={{backgroundColor: '#9de2ff'}}>
  <div className="container py-5 h-100">
    <div className="row col-md-5 d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-7 col-xl-5">
        <div className="card col" style={{borderRadius: 15}}>
          <div className="card-body p-4">
            <div className="d-flex text-black">
              <div className="flex-shrink-0">
                <img src="http://source.unsplash.com/120x120/?boobs" alt="Profile" className="img-fluid" style={{width: 180, borderRadius: 10}} />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="mb-1">{item.firstName} {item.lastName}</h5>
                <p className="mb-2 pb-1" style={{color: '#2b2a2a'}}>{item.designation}</p>
                <p className="mb-2 pb-1" style={{color: '#2b2a2a'}}>Contact: {item.contactNumber}</p>
                <h6 className="mb-2 pb-1" style={{color: '#2b2a2a'}}>{item.email}</h6>
                
                <div className="d-flex pt-1">
                  <button type="button" className="btn btn-primary flex-grow-1" onClick={() => setCount({item})}>More Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )}