import React, { useState } from 'react';
import {Link} from "react-router-dom";

function Contact() {
  const [data,setData]= useState({
      fullname: "",
      email: "",
      phone: "",
      message: "",
  })

  const HandleInput =(event)=>{
      const {value , name}= event.target;

      setData((preVal)=>{
          return {
              ...preVal,
              [name]: value,
          }
      })
  }

  const Click =(event)=>{
      event.preventDefault();
      alert(`Hello ${data.fullname} your Details Submitted`);
  }

    return (
        <>
        <div className="my-3">
            <h1 className="text-center">Contact US</h1>
        </div>
        <div className="container contact_div">
           <div className="row">
               <div className="col-md-6 col-10 mx-auto">
                   <form >
                   <div className="mb-3">
                    <label for="NAME" className="form-label mt-3">NAME</label>
                     <input type="text" className="form-control" placeholder="Enter Your Full Name" 
                      name="fullname"
                       value={data.fullname}
                       onChange={HandleInput}
                      />
                     <label for="EMAIL" className="form-label mt-3">Email address</label>
                     <input type="Email" className="form-control" placeholder="Enter Your Email"
                       name="email"
                       value={data.email}
                       onChange={HandleInput}
                      />
                     <label for="phone" className="form-label mt-3">Phone No</label>
                     <input type="number" className="form-control" placeholder="Enter Your Mobile.no"
                      name="phone"
                       value={data.phone}
                       onChange={HandleInput}
                      />
                    </div>
                   <div class="mb-3">
                     <label for="TextArea" className="form-label mt-3">Message</label>
                       <textarea class="form-control"rows="3"
                        name="message"
                         value={data.message}
                         onChange={HandleInput}
                        />
                    </div>
                    <div class="col-12">
                       <button className="btn btn-outline-primary text-center" type="submit" onClick={Click}>Submit Details</button>
                    </div>
                   </form>
               </div>
           </div>
        </div>
        </>
    )
}

export default Contact
