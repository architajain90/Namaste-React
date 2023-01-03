import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    style: { color: "yellow" },
    id: "heading-one",
  },
  "Ignite Javascript"
);

const heading2 = React.createElement(
  "h2",
  { style: { color: "blue" } },
  "This is heading two"
);
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
