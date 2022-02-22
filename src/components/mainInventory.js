import { Form, Button, Table } from "react-bootstrap";
import { createRef } from "react";
import "./funcComponent.css";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import MainCam from "./mainCam";
import { AiFillCamera, AiOutlineCamera } from "react-icons/ai";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./mainInventory.css";
import { Header } from "./Header";
import Sidebar from "./Sidebar";
import AddProduct from "./funcComponent";

const MainInventory = (props) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();

    //Todo: Check if form is valid
    //IF SO
    setFormSubmitted(true);
    //ELSE
    // setFormSubmitted(false);
    // alert("You entered Something wrong !");
  };
  return (
    <div>
      {/* <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <Header /> */}
      {!formSubmitted && (
        <Form>
          <Form.Group controlId="formBasicInventoryCategory">
            <Form.Label>Inventory Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category name"
              name="inventory_category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
          </Form.Group>
          <p
            style={{
              marginLeft: "3%",
              paddingLeft: "0%",
              justifyContent: "left",
              float: "right",
            }}
          ></p>
          {/* date  */}
          <Form.Group
            className="mb-3"
            style={{ display: "flex", marginTop: "10px" }}
          >
            <p
              style={{
                marginLeft: "0%",
                paddingLeft: "0%",
                justifyContent: "left",
                float: "right",
              }}
            >
              Enter date:
            </p>
            <Form.Control
              type="date"
              name="Mdate"
              style={{ width: "25%", marginLeft: "50px" }}
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />

            {/* time */}
            <Form.Label
              style={{
                marginLeft: "3%",
                paddingLeft: "0%",
                justifyContent: "left",
                float: "right",
              }}
            >
              Enter Time
            </Form.Label>
            <Form.Control
              type="time"
              name="Mtime"
              style={{ width: "10%", marginLeft: "50px" }}
              onChange={(e) => setTime(e.target.value)}
              value={time}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={formSubmit}
            style={{ margin: "20px" }}
          >
            Create Inventory
          </Button>
        </Form>
      )}
      {formSubmitted && (
        <AddProduct inventoryCatogery={category} date={date} time={time} />
      )}
    </div>
  );
};

export default MainInventory;
