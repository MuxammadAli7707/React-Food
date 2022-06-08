import React from 'react';
import { NavLink } from 'react-router-dom';

function Category({ Obj, setContent }) {
  let arr = [];
  let arrbtn = [];

  Obj.map((item) => {
    arrbtn.push(item.foodType);
  });
  arr = [...new Set(arrbtn)];

  let cateHandler = (e) => {
    setContent(Obj.filter((item) => item.foodType === e.target.id));
    if(e.target.id === "all") {
      setContent(Obj.filter(item => item.foodType !== e.target.id))
    }
  };

  const values = []

  const searchHandler = (e) => {
    Obj.map(item => {
      if(item.title.toLowerCase().includes(e.target.value.toLowerCase())){
        values.push(item)
      }
    })
    setContent(values)
  }
  return (
    <div className='category'>
      <div className='category__inner'>
        <div className='category__wrapper'>
          <h2 className='category__title'>Jaegar Resto</h2>
          <p className='category__text'>Tuesday, 7 June 2022</p>
        </div>
        <div className='category__search'>
          <i className='bx bx-search category__icon'></i>
          <input onChange={searchHandler} className='category__input' type="search" placeholder='Search for food, coffe, etc..' />
        </div>
      </div>
      <ul className='category__list'>
        <li className="category__item">
        <button onClick={cateHandler} id="all" className="category__btn">All</button>
      </li>
      {arr.map((item, key) => {
          return (
            <li className="category__item" key={key + 1}>
              <button onClick={cateHandler} id={item} className="category__btn">
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Category;