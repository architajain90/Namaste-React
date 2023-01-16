import { useState } from "react";
import { RESTAURANT_LIST } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(restaurants, searchText) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(RESTAURANT_LIST);

  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(restaurants, searchText);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
