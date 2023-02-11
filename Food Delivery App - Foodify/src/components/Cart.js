import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      Cart Items - {cartItems.length}
      <button onClick={() => handleClearCart()}>Clear Cart</button>
      {cartItems.map((item) => (
        <FoodItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
