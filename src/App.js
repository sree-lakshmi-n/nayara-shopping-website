import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  const categories = [
    "electronics",
    "jewellery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <main>
      <Home categories={categories} />
    </main>
  );
}

export default App;
