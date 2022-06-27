import React from 'react';
import './navbar.css';
const Navbar=({setShow,size})=>{
    return(
        <nav1>
        <div className='nav1_box' id="nav1_box">
               <span className='my_shop' onClick={()=>setShow(true)}>Menu</span>    
              {/* <span className='my_shop'>Menu</span>    */}
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i class="fas fa-cart-plus"></i>
                </span>
        <span>{size}</span>
            </div>
        </div>
        </nav1>
    )
}
export default Navbar;