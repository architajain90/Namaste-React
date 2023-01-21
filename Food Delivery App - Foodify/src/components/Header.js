import { LOGO_URL } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={LOGO_URL} alt="Foodify logo"></img>
    </a>
  );
};

const Header = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

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
          <li>Cart</li>
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
