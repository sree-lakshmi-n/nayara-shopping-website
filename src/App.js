import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import ProductDetailsCard from "./components/ProductDetailsCard/ProductDetailsCard";
import Login from "./components/Login/Login";

function App() {
  const categories = [
    "electronics",
    "jewellery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <main>
      <BrowserRouter>
        <Header categories={categories} />
        <Routes>
          <Route path="/login" element={<Login />} />
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
      </BrowserRouter>
    </main>
  );
}

export default App;
