import React, { useEffect, useState } from 'react';
import Foods from '../../Foods/Foods';
import Main from '../Main/Main';
import Nav from '../Nav/Nav';
import Order from '../Order/Order';

function Home() {
  let [Obj, setObj] = useState(Foods)
  let [content, setContent] = useState(Obj) 
  let [wishlist, setWishlist] = useState([])
  
  return (
    <>
      <div className='d-flex'>
        <Nav />
        <Main 
          Obj={Obj}
          content={content}
          setContent={setContent}
          wishlist={wishlist}
          setWishlist={setWishlist}
        />
        <Order
          wishlist={wishlist}
          setWishlist={setWishlist}
        />
      </div>
    </>
  );
}

export default Home;