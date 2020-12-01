import React from 'react';
import Card from "./Card";
import Carddata from "./Carddata"

function Sercive() {
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Welcome to Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-5">
                       {Carddata.map((cvalue,index)=>{
                           return(
                               <Card
                               key={index}
                               id={index}
                               imagesource={cvalue.imagesrc}
                               title={cvalue.title}
                               description={cvalue.about}
                                />
                           )
                       })}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sercive
