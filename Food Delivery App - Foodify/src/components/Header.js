import { LOGO_URL } from "../constants";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={LOGO_URL} alt="Foodify logo"></img>
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Offers</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
