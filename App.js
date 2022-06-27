//import logo from "./logo.svg";
import React, {Component} from 'react';
import "./App.css";
import { Fragment, useState } from "react"; //for use state
//import Users from "./components/Users";
//import Posts from "./components/Posts";
import { Link, Route, Routes } from "react-router-dom";
//import NotFound from "./components/NotFound";
//import Index from "./components/Index";
//import ProtectedRoute from "./components/ProtectedRoute";
//import Links from "./components/Links";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { createTheme } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import Acc from "./Acc";
import axios from 'axios';
import Home1 from "./component/Home/Home1";
import Navs from "./component/Navs/Nave";
import Booking from "./component/Home/Booking";
import { Nav } from "react-bootstrap";
import Navbar from "./Menu/navbar";
//import "./Menu/navbar.css";
import Amazon from"./Menu/Amazon";
import Cart from"./Menu/cart";
import Date1 from './Date1';
import Footer from '../src/component/Home/Footer';
import FooterText from './component/Home/FooterText';
import Savebooking from './Savebooking';
import Api from './Api'
import ReactDOM from 'react-dom';
import FormDialog from '../src/Menu/PopDialog';
const App=()=>{
  // ReactDOM.render(<Api />, document.getElementById('root'));
  const[show,setShow]=useState(true);
  const [cart,setCart]=useState([]); //cart is array push on the items
 
const handleClick=(item)=>{
  if(cart.indexOf(item)!==-1) return; //of element doesnt exist not add
  setCart([...cart,item]);   //add element 
  //console.log("add"); to check if element add
  };
  const handleChange=(item,d)=>{
    const ind=cart.indexOf(item);
    const arr=cart;
    arr[ind].amount+=d;
    if(arr[ind].amount===0) arr[ind].amount=1;
    setCart([...arr]);
  };

 
return <div>
   <Navs></Navs>  
    <Home1></Home1>     
  <Navbar setShow={setShow} size={cart.length}/>
  {show?<Amazon handleClick={handleClick}/>:<Cart  cart={cart} setCart={setCart} handleChange={handleChange}/>} 
  <Routes>
  <Route path='/' element={<Booking/>}></Route>
  <Route path='/Date' element={<Date1/>}></Route>
  <Route path='/Save' element={<Savebooking/>}/>
  </Routes>
   <Footer></Footer> 
   <FooterText></FooterText>
   {/* <Savebooking></Savebooking> */}
  </div>;
}
export default App;
