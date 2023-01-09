const RESTAURANT_LIST = {
  name: "Burger king",
  cuisines: ["Burger", "American"],
  rating: "4.2",
  image:
    "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
};

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img src={RESTAURANT_LIST.image}></img>
      <h2>{RESTAURANT_LIST.name}</h2>
      <h3>{RESTAURANT_LIST.cuisines.join(", ")}</h3>
      <h4>{RESTAURANT_LIST.rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

export default Body;
