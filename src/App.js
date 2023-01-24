import "./App.css";
import CategoriesSection from "./components/CategoriesSection/CategoriesSection";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const categories = [
    "electronics",
    "jewellery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <div>
      <NavBar categories={categories} />
      <HeroSection />
      <CategoriesSection />
    </div>
  );
}

export default App;
