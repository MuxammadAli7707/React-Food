import React, { useEffect, useState } from 'react';
import Foods from '../../Foods/Foods';
import Main from '../Main/Main';
import Nav from '../Nav/Nav';
import Order from '../Order/Order';

function Home({wishlist, setWishlist, content, setContent, Obj}) {

  
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