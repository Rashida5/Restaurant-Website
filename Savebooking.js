import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import './Savebooking.css'
const Savebooking=()=>{
    return(
   <div className="ContainerSave">
       <h1 className="text-save">Booking saved</h1>
       <h2 className="text-save">5 Days Ago</h2>
        <Link to='/'>
       <button className="btn-save">Back to Home</button>
       </Link>
   </div>
    )
}
export default Savebooking;