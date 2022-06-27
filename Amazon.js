import React, {useState, Fragment } from "react";
import Data1 from "./Data";
import Cards from "./card";
import './Amazon.css'
const Amazon=({handleClick})=>{
    return(
        <section className="KK">
            { 
                Data1.map((item)=>( <Cards key={item.id} item={item} handleClick={handleClick}></Cards>))
            }
        </section>
    );
};
export default Amazon;