import React from "react";
import AddProduct from "./funcComponent";
import { Header } from "./Header";
import Sidebar from "./Sidebar";
const PArent = () => {
  return (
    <>
      <div className="App" id="outer-container">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <Header />
        <div id="page-wrap" style={{ margin: "1%" }}>
          <h1 style={{ marginBottom: "5px" }}>Inventory</h1>
          <p>Create new inventory</p>

          <AddProduct />
        </div>
      </div>
    </>
  );
};

export default PArent;
