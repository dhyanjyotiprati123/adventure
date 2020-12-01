import React from 'react';
import "./Common.css";
import {NavLink} from "react-router-dom";

const Common=(props)=> {
    return (
        <>
            <div id="header" className="section" >
            <div className="container-fluid nav_bg">
             <div className="row">
               <div className="col-10 mx-auto">
                 <div className="row">
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 description ">
                     <h1>{props.title}</h1>
                     <h2 className="mt-3">{props.description}</h2>
                   
                   <div className="mt-3">
                     <NavLink to="/service" className="btn-get-started">
                       Get Started
                     </NavLink>
                   </div>
               </div>
               <div className="col-lg-6 order-1 order-lg-2 header-img">
                   <img src={props.imagesource} className="img-fluid animated" alt="header image" />
               </div>
               </div>
               </div>
             </div>
            </div>
            </div>
        </>
    );
}

export default Common;
