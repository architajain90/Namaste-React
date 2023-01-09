import React from "react";
import ReactDOM from "react-dom/client";

{
  /**
   *        Food Delivery App - Foodify
   * .........................................
   * Header
   *   - Title (Left)
   *   - Navbar (Right)
   * Body
   *   - Search
   *   - Restaurant List
   *       -Restaurant Card
   *            -Name
   *            -Rating
   *            -Cusine
   *            -Photo
   * Footer
   *        -Copyright
   */
}

const Title = () => {
  return <h1> Title</h1>;
};

const Header = () => {
  return (
    <div className="header">
      <Title />
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      <h1>Body- Restaurant List</h1>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h1> Footer</h1>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
