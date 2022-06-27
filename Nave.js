import React from "react";
import "./Navs.css";
import {Navbar,Nav,Container}from "react-bootstrap";

import { atom, useRecoilState } from "recoil";
import { xAtom,xAtom1,xAtom2 ,xAtom3,xAtom4,xAtom5} from "../atoms";
import Booking from '../Home/Booking';
//logo.png
const Navs=()=>{
return(
    <Navbar  expand="lg">
  <Container>
    <Navbar.Brand href="#home">
        <img src="data:image/webp;base64,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" title="logo"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        {/* <Nav.Link href="*">Home</Nav.Link>  */}

         <Nav.Link href="#pride1">about</Nav.Link> 
    
         <Nav.Link href='#blog1'>explore food</Nav.Link> 
 
         <Nav.Link href="#slider1">Review</Nav.Link> 

         <Nav.Link href="#Book">Booking</Nav.Link> 

        {/* <Nav.Link href="">faq</Nav.Link>  */}
        <Nav.Link href="#nav1_box">Menu</Nav.Link> 
      </Nav>
    </Navbar.Collapse>
    <Nav>
      <Nav.Link id="lastnav" href="#deets">0222456</Nav.Link>
    </Nav>

  </Container>
</Navbar>
)
}
export default Navs;