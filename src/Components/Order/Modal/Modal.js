import { React, useState } from 'react';

function Modal({
  blocking,
  setBlocking,

}) {
  let [isValid, setValid] = useState(true)

  const addNameHandler = (e) =>{
    if(e.target.value.match(/[0-9]/)){
      setValid(isValid = false)
    }
    else {
      setValid(isValid = true)
    }
  }

  let cancelHandler = (e) => {
    setBlocking(!blocking)
  }

  return (
    <div className={`modals ${blocking ? 'blocks' : 'nonesings'}`}>
      <div className='modals__inner'>
        <h3 className='modals__title'>Payment</h3>
        <p className='modals__text'>3 payment method available</p>
      </div>

      <div className='modals__box'>
        <h4 className='modals__method'>Payment Method</h4>
        <ul className='modals__list'>
          <li className='modals__item'>
            <button className='modals__btns'>
              <i className='bx bxs-credit-card modals__icon' ></i>
              <span className='modals__cards'>Credit Card</span>
            </button>
          </li>
          <li className='modals__item'>
            <button className='modals__btns'>
              <i className='bx bxl-paypal modals__icon' ></i>
              <span className='modals__cards'>Paypal</span>
            </button>
          </li>
          <li className='modals__item'>
            <button className='modals__btns'>
              <i className='bx bx-wallet-alt modals__icon' ></i>
              <span className='modals__cards'>Cash</span>
            </button>
          </li>
        </ul>

        <form>
          <div className='modals__name'>
            <label htmlFor='name' className='modals__naming'>Cardholder Name</label>
            <input onChange={addNameHandler} className={`modals__input ${isValid === true ? 'correct' : 'error'}`} id='name' type="text" placeholder='Levi Ackerman' />
          </div>
          <div className='modals__name'>
            <label htmlFor='number' className='modals__naming'>Card Number</label>
            <input className='modals__input' id='number' type="number" placeholder='2564 1421 0897 1244' />
          </div>

          <div className='modals__name modals__bottm'>
            <div className='modals__wrap'>
              <div className='modals__wrapper'>
                <label htmlFor='date' className='modals__naming'>Expiration Date</label>
                <input className='modals__input' id='date' type="month" />
              </div>
              <div className='modals__wrapper'>
                <label htmlFor='cvv' className='modals__naming'>CVV</label>
                <input className='modals__input' id='cvv' type="password" placeholder='000' />
              </div>
            </div>
          </div>

          <div className='modals__name'>
            <div className='modals__wrap'>
              <div className='modals__wrapper'>
                <label htmlFor='selects' className='modals__naming'>Expiration Date</label>
                <select id='selects' className="modals__input" aria-label="Default select example">
                  <option>Dine In</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='modals__wrapper'>
                <label htmlFor='tab' className='modals__naming'>Table no.</label>
                <input className='modals__input' id='tab' type="number" placeholder='140' />
              </div>
            </div>
          </div>

          <div className='modals__buttons'>
            <button onClick={cancelHandler} type='button' className='modals__cancel'>Cancel</button>
            <button className='modals__pay'>Confirm Payment</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;