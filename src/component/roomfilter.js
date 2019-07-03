import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./title";

// GET UNIQUE VALUES
const getUnique = (items, values) => {
  return [...new Set(items.map(item => item[values]))];
};

//USING HOOKS WITH REACT
const RoomFilter = () => {
  const mycontext = useContext(RoomContext);

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = mycontext;

  // GETING UNIQUE TYPES
  let types = getUnique(mycontext.rooms, "type");
  //ADD ALL
  types = ["all", ...types];

  //jsx maping
  let mytypes = types.map((myitem, index) => {
    return (
      <option value={myitem} key={index}>
        {myitem}
      </option>
    );
  });

  // GETING UNIQUE GUESTS
  let people = getUnique(mycontext.rooms, "capacity");

  people = people.map((mypeople, index) => {
    return (
      <option value={mypeople} key={index}>
        {mypeople}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* START OF SELECT*/}
        <div className="form-group">
          <label htmlFor="type">select</label>

          <select
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
            className="form-control"
          >
            {mytypes}
          </select>
        </div>
        {/* END OF SELECT */}

        {/* START OF GUESTS*/}
        <div className="form-group">
          <label htmlFor="capacity">guest</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
            className="form-control"
          >
            {people}
          </select>
        </div>
        {/* END OF GUESTS */}

        {/* PRICE SECTION */}
        <div className="from-group">
          <label htmlFor="price">price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            value={price}
            max={maxPrice}
            min={minPrice}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* END OF PRICE SECTION */}

        {/* START OF ROOM SIZE */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* END OF ROOM SIZE */}

        {/* START OF EXTRAS */}

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pet</label>
          </div>
        </div>

        {/* END OF EXTRAS */}
      </form>
    </section>
  );
};

export default RoomFilter;
