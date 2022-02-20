import { Form, Button, Table } from "react-bootstrap";
import { createRef } from 'react';
import { Multiselect } from "multiselect-react-dropdown";
import './funcComponent.css';
import React, { useEffect, useState } from "react";

export default function AddProduct() {
  const [count, setCount] = useState(0);

    let initialValue = [];
    const [products, setProduct] = useState(initialValue);
    const formData = createRef();
    const add = (event)=>{
        event.preventDefault();

        const newProduct = {
            inventory_category:formData.current.inventory_category.value,  
           date:formData.current.date.value,
           // time=formData.current.time.value, 
           product_name: formData.current.product_name.value,
           // location : formData 
          qty: Number(formData.current.qty.value),
          description: formData.current.description.value
        }
        // add a new product inside products array
        setProduct([...products,newProduct]);
    }
    
 
    // increment qty value by 1
    const increQty = (event)=>{
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty + 1;
        setProduct([...products])
    }
    const decreQty = (event)=>{
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty - 1;
        setProduct([...products])
    }
    return (
        <div>
            {/* <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div> */}
    
            <Form onSubmit={add} ref={formData}>
            <Form.Group controlId="formBasicInventoryCategory">
                <Form.Label>Inventory Category:</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" name="inventory_category"/>
            </Form.Group>

            {/*  date and time  */}
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
              style={{ width: "25%", marginLeft: "50px" }}
            />
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
              style={{ width: "10%", marginLeft: "50px" }}
            />
          </Form.Group>

            <Form.Group controlId="formBasicProductName">
                <Form.Label>Product Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" name="product_name"/>
            </Form.Group>
               
            <p
              style={{
                marginLeft: "3%",
                paddingLeft: "0%",
                justifyContent: "left",
                float: "right"}}>
              {" "}
              Items entered: { count }
            </p>
             {/* Price */}
            {/* <Form.Group controlId="formBasicPrice">
                <Form.Label>Price:</Form.Label>
                <Form.Control type="number" placeholder="Price in Euro" name="price"/>
            </Form.Group> */}

            <Form.Group controlId="formBasicQty">
                <Form.Label>Quantity:</Form.Label>
                <Form.Control type="number" placeholder="How many: qty" name="qty"/>
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
                <Form.Label>Description:</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" name="description"/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={() => setCount(count + 1)}>
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
                    <th>Item Name:</th>
                    <th>Location</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item, index)=>{
                        return(
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
                                    <Button variant="success" onClick={event=>increQty(event)} value={index}>+</Button>
                                    <Button variant="danger" onClick={event => decreQty(event)} value={index}>-</Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </Table>
        </div>
    )
}