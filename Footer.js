import React from "react";
import { atom, useRecoilState } from "recoil";
import {xAtom11,xAtom12,xAtom13} from "./AtomsF";
import './Footer.css';
const Footer = () => {
    const [showtext,setshow]=useRecoilState(xAtom11);
    const[showtext1,setshow1]=useRecoilState(xAtom12);
    //const [showtext12,setshow12]=useRecoilState(xAtom12);
   // const [showtext13,setshow13]=useRecoilState(xAtom13);
    const Change=()=>{
        setshow(!showtext);
    }
    const ChangeApi=()=>{
       setshow1(!showtext1);
    }
 /*   const Change11=()=>{
        setshow12(!showtext12);
    }
    const Change12=()=>{
        setshow13(!showtext13);
    }
  */
  return (
      <div>
     <div className="containerFoo">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li> */}
      {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li> */}
      {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li> */}
      {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li> */}
      {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li> */}
      <button className="btn btn-danger " onClick={Change}>Contact Us</button>
      <br></br>
      <button className="btn btn-danger  "onClick={ChangeApi}>Our Staff</button>
    </ul>
    <p class="text-center text-muted">© 2022 Company, Inc</p>
  </footer>
</div>
      </div>
   
  );
};
export default Footer;
