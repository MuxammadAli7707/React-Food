import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Setting from './Components/Setting/Setting';
import Foods from './Foods/Foods';

function App() {

  let [Obj, setObj] = useState(Foods)
  let [content, setContent] = useState(Obj) 
  let [wishlist, setWishlist] = useState([])

  return (
    <>

    <Routes>
      <Route path="/" element={<Home 
        Obj={Obj}
        wishlist={wishlist}
        setWishlist={setWishlist}
        content={content}
        setContent={setContent}
      />} />
      <Route path='/setting' element={<Setting
        Obj={Obj}
        wishlist={wishlist}
        setWishlist={setWishlist}
        content={content}
        setContent={setContent}
      />} />
    </Routes>
    </>
  );
}

export default App;
