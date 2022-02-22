import "./App.css";
import react from "react";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./components/funcComponent";
import MainInventory from "./components/mainInventory";
import { Header } from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainCam from "./components/mainCam";
import InventoryPage from "./components/InventoryPage";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mainInventory" element={<MainInventory />} />
        <Route path="/InventoryPage" element={<InventoryPage />} />
        <Route path="/AddProduct" element={<AddProduct />}></Route>
        <Route path="/MainCam" element={<MainCam />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
