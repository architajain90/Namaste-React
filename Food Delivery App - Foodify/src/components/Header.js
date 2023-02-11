import { LOGO_URL } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={LOGO_URL} alt="Foodify logo"></img>
    </a>
  );
};

const Header = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const isOnline = useIsOnline();
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart"> Cart - {cartItem.length} items </Link>
          </li>
          <li>{isOnline ? "✅" : "🔴"}</li>
        </ul>
        {isLoggedin ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
