import { Form, Button, Table } from "react-bootstrap";
import { createRef } from "react";
import "./funcComponent.css";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import MainCam from "./mainCam";
import { AiFillCamera, AiOutlineCamera } from "react-icons/ai";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  let navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState();
  const [selectedItems, setSelectedItems] = useState();
  const [main, setMain] = useState({
    options: [
      { label: "Aebad ul quadir", value: "Aebad ul quadir" },
      { label: "yousuf", value: "yousuf" },
      { label: "daniyal", value: "daniyal" },
      { label: "abdullah", value: "abdullah" },
    ],
    items: [
      { label: "Aebad ul quadir", value: "Aebad ul quadir" },
      { label: "yousuf", value: "yousuf" },
      { label: "daniyal", value: "daniyal" },
      { label: "abdullah", value: "abdullah" },
    ],
  });
  const [locations, setLocations] = useState([]);
  let initialValue = [];
  const [products, setProduct] = useState(initialValue);
  const formData = createRef();
  const add = (event) => {
    event.preventDefault();

    const newProduct = {
      inventory_category: formData.current.inventory_category.value,
      date: formData.current.Mdate.value,
      time: formData.current.Mtime.value,
      // product_name: formData.current.product_name.value,
      product_name: selectedItems.value,
      location: selected.value,
      qty: Number(formData.current.qty.value),
      description: formData.current.description.value,
    };
    // add a new product inside products array
    setProduct([...products, newProduct]);
  };
  // let temp = [];
  // products.locationforeach(item in products.locations){
  //   temp.push(item);
  // }

  // setLocations(temp);

  // increment qty value by 1
  const increQty = (event) => {
    const indexOfArray = event.target.value;
    products[indexOfArray].qty = products[indexOfArray].qty + 1;
    setProduct([...products]);
  };
  const decreQty = (event) => {
    const indexOfArray = event.target.value;
    products[indexOfArray].qty = products[indexOfArray].qty - 1;
    setProduct([...products]);
  };
  return (
    <div>
      <Form onSubmit={add} ref={formData}>
        <Form.Group controlId="formBasicInventoryCategory">
          <Form.Label>Inventory Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Name"
            name="inventory_category"
          />
        </Form.Group>
        <p
          style={{
            marginLeft: "3%",
            paddingLeft: "0%",
            justifyContent: "left",
            float: "right",
          }}
        >
          {" "}
          Items entered : {count}
        </p>
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
          />
        </Form.Group>
        {/* Item */}

        {/* location */}

        {/* quantity */}
        <div class="flex-container">
          {/* <Form.Label style={{ textAlign: "left" }}>Quantity:</Form.Label>   */}
          <div className="f1">
            <div style={{ display: "flex", marginTop: "10px" }}>
              <p>Enter item:</p>
              <Select
                options={main.items}
                value={selectedItems}
                onChange={setSelectedItems}
              />
            </div>
          </div>
          <div className="f2">
            <div style={{ display: "flex", marginTop: "10px" }}>
              <p style={{}}>Enter location:</p>
              <Select
                options={main.options}
                value={selected}
                onChange={setSelected}
              />
            </div>
          </div>
          <div className="f3">
            <p style={{ textAlign: "left" }}>Quantity </p>
            <Form.Control
              type="number"
              placeholder="How many: qty"
              name="qty"
            />
          </div>
        </div>
        {/* <p
              class="flex-item-left"
              style={{ textAlign: "left", marginRight: "30px" }}
            >
              Quantity{" "}
            </p>
            <Form.Control
              type="number"
              placeholder="How many: qty"
              name="qty"
              class="flex-item-right"
            /> */}
        {/* <Form.Group controlId="formBasicQty">
          <p style={{ textAlign: "left" }}>Quantity </p>
          <Form.Control
            type="number"
            placeholder="How many: qty"
            name="qty"
            class="flex-item-right"
          />
        </Form.Group> */}
        {/* <Form.Group>
         
        </Form.Group> */}
        <div style={{ textAlign: "left", marginTop: "13px" }}>
          <div style={{ fontSize: "20px" }}>
            {" "}
            1.{" "}
            <AiFillCamera
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={() => navigate("./MainCam")}
            />{" "}
            Barcode
          </div>
          <div style={{ fontSize: "20px" }}>
            {" "}
            2.{" "}
            <AiFillCamera
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={() => navigate("./MainCam")}
            />{" "}
            Manufacturer code
          </div>
          <div style={{ fontSize: "20px" }}>
            {" "}
            3.{" "}
            <AiFillCamera
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={() => navigate("./MainCam")}
            />{" "}
            Closeup picture of item
          </div>
          <div style={{ fontSize: "20px" }}>
            {" "}
            4.{" "}
            <AiFillCamera
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={() => navigate("./MainCam")}
            />{" "}
            Front side of item
          </div>
          <div style={{ fontSize: "20px" }}>
            {" "}
            5.{" "}
            <AiFillCamera
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={() => navigate("./MainCam")}
            />{" "}
            Back side of item
          </div>
        </div>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            name="description"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => setCount(count + 1)}
          style={{ margin: "20px" }}
        >
          Add to Inventory
        </Button>
      </Form>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Index</th>
            <th>Inventory Category</th>
            <th>Date</th>
            <th>Time</th>
            <th>Item Name</th>
            <th>Location</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.inventory_category}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.product_name}</td>
                <td>{item.location}</td>
                <td>{item.qty}</td>
                <td>{item.description}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={(event) => increQty(event)}
                    value={index}
                  >
                    +
                  </Button>
                  <Button
                    variant="danger"
                    onClick={(event) => decreQty(event)}
                    value={index}
                  >
                    -
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
