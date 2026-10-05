import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import AISales from "./pages/AISales";
import AISolutions from "./pages/AISolutions";
import ManagedSales from "./pages/ManagedSales";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="/ai-sales" element={<AISales />} />

          <Route path="/ai-solutions" element={<AISolutions />} />

          <Route path="/managed-sales" element={<ManagedSales />} />

          <Route path="/about-us" element={<AboutUs />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;