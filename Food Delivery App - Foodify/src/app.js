import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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
