import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import ProductDetailsCard from "./components/ProductDetailsCard/ProductDetailsCard";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { auth, onAuthStateChanged } from "./firebase";
import { useStateValue } from "./StateProvider";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import FlexWrapper from "./UI/FlexWrapper/FlexWrapper";

function App() {
  const categories = [
    "electronics",
    "jewellery",
    "men's clothing",
    "women's clothing",
  ];

  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("The user is >>>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <main>
      <BrowserRouter>
        <FlexWrapper element="div" className="flex-dirn-col main-container">
          <Header categories={categories} />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route exact path="/" element={<Home categories={categories} />} />
            <Route
              exact
              path="/jewellery"
              element={<Products category="jewelery" />}
            />
            <Route
              exact
              path="/electronics"
              element={<Products category="electronics" />}
            />
            <Route
              exact
              path="/men's clothing"
              element={<Products category="men's clothing" />}
            />
            <Route
              exact
              path="/women's clothing"
              element={<Products category="women's clothing" />}
            />
            <Route path="/:category/:id" element={<ProductDetailsCard />} />
          </Routes>
          <Footer />
        </FlexWrapper>
      </BrowserRouter>
    </main>
  );
}

export default App;
