import React from 'react'
import contactusImg from "../assets/images/contactus.png"

const ContactusPage = () => {
  return (
     <div className="container">
      <div className="row">
        <div className="col-12 bg-info p-3 rounded">
          <h3>Contact us</h3>
        </div>
      </div>
      <div className="row align-items-center p-2">
        <div className="col-md-6">
          <center>
            <img src={contactusImg} alt="Contact Us" className="img-fluid ContactusImg" />
          </center>
        </div>
        <div className="col-md-6">
          <h3 className="text-primary"> How to contact us</h3>
          <h5>+1 999 999 99 99</h5>
          <h5>+1 123 456 78 99</h5>
          <h5>Niloowf@gmail.com</h5>
          <div>
            <div className="mb-3">
  <label className="form-label">Email address</label>
  <input type="email" className="form-control" placeholder="name@example.com" />
</div>
<div className="mb-3">
  <textarea className="form-control" rows="3"></textarea>
  <button type="submit" className="btn btn-primary from-control mt-2">Submit</button>
</div>
   
          </div>
        </div>
      </div>
      </div>
  )
}

export default ContactusPage