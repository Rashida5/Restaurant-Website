import React from 'react';
import "./Header.css";
import Booking from './Booking';
import { Link, Route, Routes,withRouter } from "react-router-dom";
const Header=()=>{
    return(
        <header>
            <div className='container'>
                <div className='row'>
                <div className='col-md-6'>
                 <h2>Good food choices are good investments.</h2> 
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
        
                </div>
                <div className='col-md-6'>

                </div>
            </div>
            </div>
        </header>
    )
}
export default Header;