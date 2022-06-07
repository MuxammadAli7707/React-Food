import React, { useEffect, useState } from "react";
import deletes from "../../assets/Image/delete.svg";
import Modal from "./Modal/Modal";

function Order({ setWishlist, wishlist }) {
  let [blocking, setBlocking] = useState(false);
  let mopenHandler = () => {
    setBlocking(!blocking);
  };

  let deleteHandler = (e) => {
    let idd = e.target.id;
    setWishlist(wishlist.filter((item) => item.id !== +idd));
  };

  let [changed, setChanged] = useState([]);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    let num = 0;
    wishlist.forEach(element => {
      num += element.money;
    });
    setTotal(num); 

    let temp = [...new Set(wishlist.map(item => item))];
    setChanged(temp);
  }, [wishlist]);

  return (
    <div className="order">
      <h3 className="order__title">Orders #34562</h3>
      <ul className="order__lists">
        <li className="order__items">
          <button className="order__btns">Dine In</button>
        </li>
        <li className="order__items">
          <button className="order__btns">To Go</button>
        </li>
        <li className="order__items">
          <button className="order__btns">Delivery</button>
        </li>
      </ul>
      <div className="order__box">
        <div>
          <span className="order__desc">Item</span>
        </div>
        <div className="order__boxing">
          <span className="order__desc">Qty</span>
          <span className="order__desc">Price</span>
        </div>
      </div>

      <ul className="order__list">
        {changed.map((item, key) => {
          return (
            <li key={key+33} className="order__itm">
              <div className="order__wrapper">
                <div className="order__info">
                  <div className="order__imgbox">
                    <img className="order__img" src={item.img} alt="img" />
                    <div className="order__titles">
                      <h4 className="order__text">{item.title}</h4>
                      <p className="order__price">{item.money}</p>
                    </div>
                  </div>
                  <div className="order__number">
                    <span className="order__cost">{item.num}</span>
                  </div>
                </div>
                <div>
                  <input
                    className="order__input"
                    placeholder="Order Note..."
                    type="text"
                  />
                </div>
              </div>
              <div className="order__counts">
                <span className="order__counting">{(item.money * item.num).toFixed(2)}</span>
                <button
                  onClick={deleteHandler}
                  id={item.id}
                  className="order__del"
                >
                  <i onClick={deleteHandler}
                  id={item.id} className="bx bx-trash-alt"></i>
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="order__bottom">
        <div className="order__discountbox">
          <p className="order__discount">Discount</p>
          <span>0</span>
        </div>
        <div className="order__total">
          <p className="order__discount">Sub total</p>
          <span>$ {total.toFixed(2)}</span>
        </div>

        <button onClick={mopenHandler} className="order__button">
          Continue to Payment
        </button>
      </div>
      <Modal blocking={blocking} setBlocking={setBlocking} />
    </div>
  );
}

export default Order;
