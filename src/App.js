import "./App.css";
import CategoriesSection from "./components/CategoriesSection/CategoriesSection";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CategoriesSection />
    </div>
  );
}

export default App;
