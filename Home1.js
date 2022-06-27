import React from "react";
import Header from "./Header";
import './Home1.css';
//import prideimg from './../../assets/1.png';
//import prideimg from "http://www.piedmont.org/media/BlogImages/Vegan-vs-plant-based.jpg";
//import prideimg from "http://demo.tutsflow.com/foodera/images/features/1.png";
//import foodwhite from './../../assets/foodwhite.jpg';
import Data from '../../Data';
import Slider1 from './Slider';
import Booking from './Booking';
import { atom, useRecoilState } from "recoil";
import { xAtom,xAtom1,xAtom2 ,xAtom3,xAtom4,xAtom5} from "../atoms";
import { Carousel } from "bootstrap";
import { Link, Route, Routes,withRouter } from "react-router-dom";
import Navbar from "../../Menu/navbar";
const Home1=()=>{
    //const [NumofDiv,setNumofDiv]=useRecoilState(xAtom5);
    //const [Home1,sethom1]=useRecoilState(xAtom);
    //const [pride1,setpride1]=useRecoilState(xAtom1);
    //const [ingredients1,setingredients1]=useRecoilState(xAtom2);
    //const [slider1,setslider1]=useRecoilState(xAtom3);
    //const [blogs1,setblogs1]=useRecoilState(xAtom4);
   const blogitems=Data.map((item)=>{
        return(
            <div className="col-md-4">
                <div className="box">
                <img src={item.img}></img>
             <h5> {item.title}</h5> 
            <span> {item.time}</span> 
              <h6> {item.price}</h6>
                </div>
            </div>
        )
    })
    return(
        <div>
         {Home1&&   <section id='Home1'>
        <Header></Header>
        <section className='numbers'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2>1287+</h2>
                        <h6>SAVING</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>1287+</h2>
                        <h6>PHOTOS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>5786+</h2>
                        <h6>ROCKETS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>1440+</h2>
                        <h6>GLOBES</h6>
                    </div>
                </div>
            </div>
        </section>
        </section>}
       <section className="pride" id="pride1">
            <div className="container">
                <div className='row'>
                    <div className="col-md-6">
           <img src="http://www.piedmont.org/media/BlogImages/Vegan-vs-plant-based.jpg"></img> 
          {/* <img src="http://demo.tutsflow.com/foodera/images/features/1.png"></img> */}
          {/* <img src={require("https://drive.google.com/file/d/1ieY18F4Bz3W0AV1PPuPfqmfbRP-fb8dS/view?usp=sharing").default}></img> */}
                    </div>
                    <div className="col-md-6">
                        <h2>We pride ourselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button><a href='#'>Learn more</a></button>
                    </div>
                </div>
            </div>
        </section>
       <section className='ingredients' id="ingredients1">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <h2>We make everything by hand with the best possible ingredients.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <ul>
                        <li>Etiam sed dolor ac diam volutpat.</li>
                        <li>Erat volutpat aliquet imperdiet.</li>
                        <li>purus a odio finibus bibendum.</li>
                        <button><a href='#'>Learn more</a></button>
                    </ul>
                </div>
                <div className="col-md-6">
                         {/* <img src={foodwhite}></img>  */}
                       <img src="https://p.globalsources.com/IMAGES/PDT/B5253851792/Food-storage-containers.jpg"></img>
                        {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Fhealthy-eating-lifestyle-concept-office-food-1325922629&psig=AOvVaw06woCkRBhBsVHccSu-x5mi&ust=1654182832080000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDE1rbFjPgCFQAAAAAdAAAAABAM"></img> */}
                        </div>
                </div>
            </div>
            <section className="parale">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>When a man's stomach is full it makes no<br/> difference whether he is rich or poor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
<a href='#'>Watch our Story</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
       <section id='blog1'>
            <section className="blogs" >
                <section className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <h2>Explore Our Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        </div>
                    </div>
                    <div className="row"> 
                          {blogitems} 
                     </div> 
                </section>
            </section>
        </section>     
       <section className="sliderx" id='slider1'>
            <Slider1></Slider1>
        </section>
         {/* <Booking></Booking>  */}
        </div>
    )
}
export default Home1;

