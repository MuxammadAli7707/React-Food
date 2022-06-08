import React from "react";

function Modaling({ setModaling, modaling, nameHandler, priceHandler, foodRests, addHandler, foodTypes }) {
  return (
    <div className={`backdrop-add ${modaling ? 'blockingg' : 'nonesingg'}`}>
      <div className={`add-modal p-4 ${modaling ? "blockingg" : "nonesingg"}`}>
        <h3 className="mb-4">Add Food</h3>
        <form className="d-flex  flex-column">
          <label className="mb-2">Food Name</label>
          <input onChange={nameHandler} className="mb-4" type="text" placeholder="Food Name" />

          <label className="mb-2">Price</label>
          <input onChange={priceHandler} className="mb-4" type="number" placeholder="Price" />

          <label className="mb-2">Food Type</label>
          <input onChange={foodTypes} className="mb-4" type="text" placeholder="Food Type" />

          <label className="mb-2">Bowl</label>
          <input className="mb-4" onChange={foodRests} type="number" placeholder="Bowl" />
        </form>
        <div className="d-flex">
          <div className="add-modal-btns">
            <button onClick={() => setModaling(!modaling)} className="me-3">
              Cancel
            </button>
            <button onClick={addHandler} type="submit">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modaling;
