import React from 'react';
import Card from './Card/Card';
import Category from './Category/Category';

function Main({
  Obj,
  content,
  setContent,
  wishlist, 
  setWishlist
}) {
  return (
    <main>
      <Category
        Obj={Obj}
        setContent={setContent}
      />
      <Card 
        content={content}
        wishlist={wishlist} 
        setWishlist={setWishlist}
      />
    </main>
  );
}

export default Main;