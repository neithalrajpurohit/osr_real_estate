import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import PropertyCards from "./Components/PropertySection";
import PropertyDetails from "./Components/Property";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <Toaster position="botton-right" />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/" element={<PropertyCards />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
