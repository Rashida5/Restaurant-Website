import React from 'react';
const Cards=({item,handleClick})=>{
    const{id,title,price,img}=item;
    return(
      <div className='cards'>
          <div className='image_box'>
              <img src={img} ></img>
              </div>
              <div className='details'>
                  <p>{title}</p>
                  <p>Price-{price}Rs</p>
                  <button onClick={()=>handleClick(item)}>Add to Cart</button>
              </div>
      </div>
    );
}
export default Cards;