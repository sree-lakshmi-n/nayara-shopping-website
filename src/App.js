import "./App.css";
import Home from "./Pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";

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
        <NavBar categories={categories} />
        <Routes>
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
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
