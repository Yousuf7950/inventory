import { Form, Button, Table } from "react-bootstrap";
import { useState, createRef } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddProduct() {
  let initialValue = [];
  let itemName=['Item1','Item2'];
  let locationName=['Location1','Location2']
  const [products, setProduct] = useState(initialValue);
  const formData = createRef();
  // addproduct handler method
  const add = (event) => {
    event.preventDefault();

    const newProduct = {
      product_name: formData.current.product_name.value,
      price: formData.current.price.value,
      qty: Number(formData.current.qty.value),
    };
    // add a new product inside products array
    setProduct([...products, newProduct]);
  };
  // increment qty value by 1
  const increQty = (event) => {
    //console.log(event.target.value)
    const indexOfArray = event.target.value;
    products[indexOfArray].qty = products[indexOfArray].qty + 1;
    setProduct([...products]);
  };
  // decrement qty value by 1
  const decreQty = (event) => {
    const indexOfArray = event.target.value;
    products[indexOfArray].qty = products[indexOfArray].qty - 1;
    setProduct([...products]);
  };
  return (
    <div>
      <Form onSubmit={add} ref={formData}>
        <Form.Group
          controlId="formBasicProductName"
          style={{ display: "flex" }}
        >
          <p
            style={{
              marginLeft: "0%",
              paddingLeft: "0%",
              justifyContent: "left",
              float: "right",
            }}
          >
            Inventory
          </p>
          <Form.Control
            type="text"
            placeholder="Enter Inventory Category"
            name="product_name"
            style={{ width: "25%", marginLeft: "20px" }}
          />
          <p
            style={{
              marginLeft: "3%",
              paddingLeft: "0%",
              justifyContent: "left",
              float: "right",
            }}
          >
            {" "}
            Items entered: 4
          </p>
        </Form.Group>
        {/* <Form.Group controlId="formBasicProductName">
          <Form.Label>Product Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Name"
            name="product_name"
          />
        </Form.Group> */}
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
              }} >
              Enter date:
            </p>
            <Form.Control
              type="date"
              style={{ width: "25%", marginLeft: "50px" }} />
            <Form.Label
              style={{
                marginLeft: "3%",
                paddingLeft: "0%",
                justifyContent: "left",
                float: "right",
              }}>
              Enter Time
            </Form.Label>
            <Form.Control
              type="time"
              style={{ width: "10%", marginLeft: "50px" }}
            />
          </Form.Group>
        {/* Dropdown for item name */}
        <div style={{ display: "flex", marginTop: "10px" }}>
            <p
              style={{
                marginLeft: "0%",
                paddingLeft: "0%",
                justifyContent: "left",
                float: "right",
              }}
            >
              Enter item:
            </p>
            <Multiselect
              className="multiselectContainerReact"
              options={itemName} // Options to display in the dropdown
              singleSelect // Preselected value to persist in dropdown
              // onSelect={this.onSelect} // Function will trigger on select event
              // onRemove={this.onRemove} // Function will trigger on remove event
              displayValue="name"
              // Property name to display in the dropdown options
            />
          </div>

          {/* Dropdown for location */}
          <div style={{ display: "flex", marginTop: "10px" }}>
            <p
              style={{
                marginLeft: "0%",
                paddingLeft: "0%",
                justifyContent: "left",
                float: "right",
              }}
            >
              Enter location:
            </p>
            <Multiselect
              className="multiselectContainerReact"
              options={locationName} // Options to display in the dropdown
              singleSelect // Preselected value to persist in dropdown
              // onSelect={this.onSelect} // Function will trigger on select event
              // onRemove={this.onRemove} // Function will trigger on remove event
              displayValue="name"
              // Property name to display in the dropdown options
            />
          </div>

          {/* For quantity */}
          <div style={{ display: "flex", marginTop: "10px" }}>
            <p
              style={{
                marginLeft: "0%",
                paddingLeft: "0%",
                justifyContent: "left",
                float: "right",
              }}
            >
              Quantity:
            </p>

            <Form.Control
              type="number"
              placeholder="Enter quantity"
              name="qty"
            />
          </div>

          <Form.Group
            controlId="formBasicProductName"
            style={{ display: "flex" }}
          >
            <p
              style={{
                marginLeft: "0%",
                paddingLeft: "0%",
                justifyContent: "left",
                float: "right",
              }}
            >
              Description:
            </p>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              name="description"
              style={{ width: "25%", marginLeft: "20px" }}
            />
            <p
              style={{
                marginLeft: "3%",
                paddingLeft: "0%",
                justifyContent: "left",
                float: "right",
              }}
            >
              {" "}
            </p>
          </Form.Group>
        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price in Euro"
            name="price"
          />
        </Form.Group>

        <Form.Group controlId="formBasicQty">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control type="number" placeholder="How many: qty" name="qty" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add to Inventory
        </Button>
      </Form>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Index</th>
            <th>Product Name:</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.product_name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
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
