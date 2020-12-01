import React from 'react';
import {NavLink} from "react-router-dom";

function Card(props) {
    return (
        <>
        
                      <div className="col-md-4 col-10 mx-auto ">
                      <div class="card" >
                       <img src={props.imagesource} class="card-img-top" alt="Card-image" />
                       <div class="card-body">
                       <h5 class="card-title font-weight-bold">{props.title}</h5>
                       <p class="card-text">{props.description}</p>
                      <NavLink to="/contact" class="btn btn-primary">Book Now</NavLink>
                      </div>
                    </div>
                      </div>
                  
        </>
    )
}

export default Card
