import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Card({
  content,  
  wishlist, 
  setWishlist
  }) {

  const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

  let foodAdd = (el) => {
    if (wishlist.indexOf(el) !== -1) 
    return
    setWishlist([...wishlist, el])
  }

  return (
    <div className='cardi'>
      <div className='cardi__inner'>
        <h3 className='cardi__title'>Choose Dishes</h3>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" className='cardi__select'>Dine In</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Dine In"
          onChange={handleChange}
        >
          <MenuItem value={10}>Cold Dishes</MenuItem>
          <MenuItem value={20}>Soup</MenuItem>
          <MenuItem value={30}>Hot Dishes</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </div>

      <ul className='cardi__list'>
        {content.map((item, index) => {
          return (
            <li onClick={() => foodAdd(item)} key={index + 1} className='cardi__item'>
          <img className='cardi__img' src={item.img} alt="card-img" />
          <div className='cardi__box'>
            <h3 className='cardi__info'>{item.title}</h3>
            <p className='cardi__cent'>{item.money}</p>
            <span className='cardi__bowl'>{item.foodType}</span>
          </div>
        </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Card; 