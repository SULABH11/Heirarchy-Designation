import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { categories} from '../data'
import Header from '../pages/Header'
import Footer from '../pages/Footer'

const Profile = () => {
  const params = useParams(); 
  const navigate = useNavigate();
  const [item, setItem] = useState({});

  useEffect(()=>{
    if(params?.id){
      const data = categories.find(categories => categories.id == params.id)
      setItem(data)
    }
  },[params?.id])
  return (
<div>
<Header />
  <div>
    <section style={{backgroundColor: '#eee'}}>

      <div className="container py-3">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4 mt-0">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item active" aria-current="page" style={{ fontWeight: "bold", color: "black"}}>User Profile</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src={item.imageUrl} alt="avatar" className="rounded-circle img-fluid" style={{width: 150}} />
                <h5 className="my-3">{item.firstName}  </h5>
                <h2 className="my-3">{item.designation}</h2>
                <p className="mb-4">{item.email}</p>
              </div>
            </div>
            
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{item.firstName} {item.lastName} </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{item.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{item.contactNumber}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Age</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{item.age}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">DOB</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{item.dob}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{item.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  </div> 
  <Footer />
</div>)
}

export default Profile