import "./App.css";
import react from "react";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./components/funcComponent";
import { Header } from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainCam from "./components/mainCam";
import Parent from "./components/Parent";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Parent />} />
        <Route path="/Parent" element={<Parent />} />
        <Route path="/AddProduct" element={<AddProduct />}></Route>
        <Route path="/MainCam" element={<MainCam />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
