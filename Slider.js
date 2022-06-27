import React from "react";
import Carousel from 'react-bootstrap/Carousel';
//import img1 from './../../assets/(1).jpg';
//import img2 from './../../assets/(2).jpg';
//import img3 from './../../assets/(3).jpg';
import './Home1.css';
const Slider1=()=>{
return(
 <div className="container">
<div className="row">
 <div className="col-lg-12 col-md-12">
     <h2>Testimonials</h2>
<Carousel>
  <Carousel.Item>
   <img src="https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?b=1&k=20&m=1007763808&s=170667a&w=0&h=XOYFk0a0vrL6NVnmc9vkCwH4oRdmBfpToCfPk8425kc="/>
    <Carousel.Caption>
      <h3>Simab Dave</h3>
      <p>"Very good and the taste delecious"</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src="https://media.istockphoto.com/photos/handsome-man-smiling-cheerful-with-a-big-smile-on-face-showing-teeth-picture-id1158259580?b=1&k=20&m=1158259580&s=170667a&w=0&h=caQvwxd660e5QeGwDfHQD-gBzlmbbNdOWXNKDIdZa-Y="/>
    <Carousel.Caption>
      <h3>Johnthan Doe</h3>
      <p>"Very good place and good service"</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src="https://media.istockphoto.com/photos/business-woman-portrait-outdoors-picture-id1078084172?k=20&m=1078084172&s=612x612&w=0&h=rrKM3jafa37V70ICmFOfDt7v8XgwGnzYU0fqxqLHtY8="/>
    <Carousel.Caption>
      <h3>Sara Ameer</h3>
      <p>"Become the best resturant I have ever seen "</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
</div>
</div>
</div>
)
}
 export default Slider1;