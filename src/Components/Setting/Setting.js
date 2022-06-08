import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Edit from "./Modaling/Edit/Edit";
import Modaling from "./Modaling/Modaling";

function Setting({ wishlist, setWishlist, content, setContent, Obj }) {
  let [modaling, setModaling] = useState(false)
  let [editOpen, setEditOpen] = useState(false)

  let [foodName, setFoodName] = useState('')
  let [foodPrice, setFoodPrice] = useState('')
  let [typeFood, setFoodType] = useState('')
  let [foodRest, setFoodRest] = useState('')

  let [element, setElement] = useState([])

  let editHander = (id) => {
    setElement(id)
    setEditOpen(!editOpen)
  }

  const nameHandler = (e) =>{
    setFoodName(e.target.value);
  }
  const priceHandler = (e) =>{
    setFoodPrice(e.target.value);
  }
  const foodTypes = (e) =>{
    setFoodType(e.target.value);
  }
  const foodRests = (e) =>{
    setFoodRest(e.target.value);
  }

  const addHandler = (e) => {
    setModaling(!modaling)
    setContent([
      ...content, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjogufViGSAGO3F2nF0cv08TRonbf8W6IIJA&usqp=CAU",
        title: foodName,
        money: foodPrice,
        theRest: foodRest,
        foodType: typeFood
      }
    ])
  }
  
  let filters = [];
  let filtersbtn = [];

  Obj.map((item) => {
    filtersbtn.push(item.foodType);
  });
  filters = [...new Set(filtersbtn)];

  let filterHandler = (e) => {
    setContent(Obj.filter((item) => item.foodType === e.target.id));
    if (e.target.id === "all") {
      setContent(Obj.filter((item) => item.foodType !== e.target.id));
    }
  };
  return (
    <>
      <div className="d-flex">
        <Nav />
        <div className="setting__inner">
          <h2 className="setting__title">Settings</h2>
          <ul className="setting__lists">
            <li className="setting__itms">
              <i className="bx bx-heart setting__icon"></i>
              <div className="setting__box">
                <h3 className="setting__desc">Appereance</h3>
                <p className="setting__text">Dark and Light mode, Font size</p>
              </div>
            </li>
            <li className="setting__itms">
              <i className="bx bx-store-alt setting__icon"></i>
              <div className="setting__box">
                <h3 className="setting__desc">Your Restaurant</h3>
                <p className="setting__text">Dark and Light mode, Font size</p>
              </div>
            </li>
            <li className="setting__itms">
              <i className="bx bx-compass setting__icon"></i>
              <div className="setting__box">
                <h3 className="setting__desc">Products Management</h3>
                <p className="setting__text">
                  Manage your product, pricing, etc
                </p>
              </div>
            </li>
            <li className="setting__itms">
              <i className="bx bx-bell setting__icon"></i>
              <div className="setting__box">
                <h3 className="setting__desc">Notifications</h3>
                <p className="setting__text">Customize your notifications</p>
              </div>
            </li>
            <li className="setting__itms">
              <i className="bx bx-lock-open-alt setting__icon"></i>
              <div className="setting__box">
                <h3 className="setting__desc">Security</h3>
                <p className="setting__text">Configure Password, PIN, etc</p>
              </div>
            </li>
            <li className="setting__itms">
              <i className="bx bx-lock-open-alt setting__icon"></i>
              <div className="setting__box">
                <h3 className="setting__desc">Security</h3>
                <p className="setting__text">Configure Password, PIN, etc</p>
              </div>
            </li>
            <li className="setting__itms">
              <i className="bx bx-error-circle setting__icon"></i>
              <div className="setting__box">
                <h3 className="setting__desc">About Us</h3>
                <p className="setting__text">Find out more about Posly</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="setting__main">
          <div className="setting__info">
            <h3 className="setting__product">Products Management</h3>
            <button className="setting__btn">
              <i className="bx bx-slider-alt setting__slider"></i>
              <span className="setting__manage">Manage Categories</span>
            </button>
          </div>

          <ul className="category__list">
            <li className="category__item">
              <button onClick={filterHandler} id="all" className="category__btn">
                All
              </button>
            </li>
            {filters.map((item, key) => {
              return (
                <li className="category__item" key={key + 1}>
                  <button
                    onClick={filterHandler}
                    id={item}
                    className="category__btn"
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>

          <ul className="setting__list">
            <li onClick={() => setModaling(!modaling)} className="setting__new">
              <i className='bx bx-plus' ></i>
              <h3 className="setting__add">Add new dish</h3>
            </li>
            {content.map((item, index) => {
            return (
              <li className="setting__item">
              <div className="setting__boxing">
                <img
                  className="setting__img"
                  src={item.img}
                  alt="card-img"
                />
                <div className="cardi__box">
                  <h3 className="cardi__info">{item.title}</h3>
                  <span className="cardi__cent setting__cent">$ {item.money}</span>
                  <span className="cardi__bowl">{item.theRest} Bowls</span>
                </div>
              </div>
              <div onClick={() => editHander(item)} className="setting__wrapp">
                <i onClick={() => editHander(item)} className="bx bx-edit-alt setting__ed"></i>
                <span onClick={() => editHander(item)} className="setting__edit">Edit dish</span>
              </div>
            </li>
            );
          })}
          </ul>
          <div className='setting__buttons'>
            <button className='setting__discard'>Discard Changes</button>
            <button className='setting__save'>Save Changes</button>
          </div>
        </div>
      </div>

      <Modaling 
        modaling={modaling}
        setModaling={setModaling}
        nameHandler={nameHandler}
        priceHandler={priceHandler}
        foodTypes={foodTypes}
        foodRests={foodRests}
        addHandler={addHandler}
      />
      <Edit 
        element={element}
        editOpen={editOpen}
        content={content}
        setEditOpen={setEditOpen}
        setContent={setContent}
      />
    </>
  );
}

export default Setting;
