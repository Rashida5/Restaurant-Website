import React from "react";
import { Fragment, useState } from "react";
import './Booking.css';
import { Link, Route, Routes } from "react-router-dom";
const Booking=()=>{
    const [nameIn, setNameIn] = useState();
    const [Nump, setNump] = useState();
    const [tel, settel] = useState();
    return(
        <div className="bd" id="Book">
<div class='container1'>
    <div class="title">Booking</div>
    <form action='#'>
        <div class='user-details'>
            <div class='input-box'>
                   <span class="details">Name</span>
                   <input onChange={(e) => setNameIn(e.target.value)} type='text' placeholder="Enter your Name" required></input>
            </div>
            <div class='input-box'>
                   <span class="details">Num-P</span>
                   <input onChange={(e) => setNump(e.target.value)} type='number' placeholder="Enter number of person you need" required></input>
            </div>
            <div class='input-box'>
                   <span class="details">Telphone</span>
                   <input onChange={(e) => settel(e.target.value)} type='tel' placeholder="Enter your Phone" required></input>
            </div>
        </div>
        <Link to='/Date'>
        <div class='button'>
                 <input disabled={!nameIn || !Nump || !tel} type='submit' value='Next'></input> 
                {/* <button disabled={!nameIn}>Save</button> */}
            </div>
            </Link>
    </form>
</div>
</div>
    )
}
export default Booking; 