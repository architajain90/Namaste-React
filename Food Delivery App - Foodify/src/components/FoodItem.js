//Not sure why this url is not working in constant.js - TODO
const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const FoodItem = ({ name, cloudinaryImageId }) => {
  return (
    <div className="restaurant-card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
    </div>
  );
};

export default FoodItem;
