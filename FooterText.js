import React from "react";
import { atom, useRecoilState } from "recoil";
import {xAtom11,xAtom12,xAtom13} from "./AtomsF";
import Api from '../../Api';
const FooterText=()=>{
   const [showtext,setshow]=useRecoilState(xAtom11);
   const[showtext1,setshow1]=useRecoilState(xAtom12);
  //  const [showtext12,setshow12]=useRecoilState(xAtom12);
  //  const [showtext13,setshow13]=useRecoilState(xAtom13);
    return(
        <div>
           {showtext && <a href="https://www.facebook.com/oliveartichaut"  target="_blank" class="fa fa-facebook"></a>}
          {showtext&& <a href="https://www.instagram.com/olive_artichaut/"target="_blank" class="fa fa-instagram"></a>}
          {showtext1&&<Api></Api>}
        </div>
    )
}
export default FooterText;