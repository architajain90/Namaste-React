import React from "react";
import ReactDOM from "react-dom/client";
import { FaUserAlt } from "react-icons/fa";
import Logo from "./img/logo.png";

// Creating nested header elements h1, h2, h3 inside div - USING createReactElement

const container = React.createElement("div", { className: "title" }, [
  //Need to check if it is className or class
  React.createElement("h1", { key: "1" }, "This is heading 3"),
  React.createElement("h2", { key: "2" }, "This is heading two"),
  React.createElement("h3", { key: "3" }, "This is heading 3"),
]);

//Create nested header element using JSX Element and functional component

const header1 = <h1 key="1">This is heading 1</h1>;
const Header2 = () => {
  return <h2 key="1">This is heading 1</h2>;
};

// Composing components

const Container = () => {
  return (
    <div className="title">
      {header1}
      <Header2 />
      <h3 key="3">THis is heading 3</h3>
    </div>
  );
};

//Search Component

const SearchComponent = () => {
  return <input className="searchBar" placeholder="Search here"></input>;
};

const HeaderComponent = () => {
  return (
    <>
      <img src={Logo} alt="Alternate img" width="50px" height="50px" />
      <SearchComponent />
      <FaUserAlt size="2em" />
    </>
  );
};

//

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(container);
//root.render(<Container />);
root.render(<HeaderComponent />);
