import { Form, Button, Table, Dropdown } from "react-bootstrap";
import { createRef, Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./classComponent.css";

export default class AddInventory extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      itemName: [
        { name: "Item 1", id: 1 },
        { name: "Item 2", id: 2 },
        { name: "Item 3", id: 3 },
        { name: "Item 2", id: 4 },
      ],
      locationName: [
        { name: "Location 1", id: 1 },
        { name: "Location 2", id: 2 },
        { name: "Location 3", id: 3 },
        { name: "Location 4", id: 4 },
      ],
    };
    this.formData = createRef();
  }
  // addproduct handler method
  add = (event) => {
    event.preventDefault();
    //console.log(formData.current)
    const newProduct = {
      product_name: this.formData.current.product_name.value,
      price: this.formData.current.price.value,
      qty: Number(this.formData.current.qty.value),
    };
    // add a new product inside products array
    this.state.products.push(newProduct);
    this.setState({
      products: this.state.products,
    });
    //console.log(products);
  };
  // increment qty value by 1
  increQty = (event) => {
    //console.log(event.target.value)
    const indexOfArray = event.target.value;
    this.state.products[indexOfArray].qty =
      this.state.products[indexOfArray].qty + 1;
    this.setState({
      products: this.state.products,
    });
  };
  // decrement qty value by 1
  decreQty = (event) => {
    const indexOfArray = event.target.value;
    this.state.products[indexOfArray].qty =
      this.state.products[indexOfArray].qty - 1;
    this.setState({
      products: this.state.products,
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.add} ref={this.formData}>
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
              options={this.state.itemName} // Options to display in the dropdown
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
              options={this.state.locationName} // Options to display in the dropdown
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

          <Button type="submit" variant="primary" type="submit">
            Add to Inventory
          </Button>
        </Form>

        <Table
          striped
          bordered
          hover
          variant="dark"
          style={{ marginTop: "2%" }}
        >
          <thead>
            <tr>
              <th>Index</th>
              <th>Date</th>
              <th>Time</th>
              <th>Inventory Category</th>
              <th>Item Name</th>
              <th>Location</th>
              <th>Quantity</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.inventory_category}</td>
                  <td>{item.name}</td>
                  <td>{item.location}</td>
                  <td>{item.quantity}</td>
                  <td>{item.description}</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={(event) => this.increQty(event)}
                      value={index}
                    >
                      +
                    </Button>
                    <Button
                      variant="danger"
                      onClick={(event) => this.decreQty(event)}
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
}

// import { Form, Button, Table } from "react-bootstrap";
// import { createRef, Component } from 'react';

// export default class AddInventory extends Component{
//     constructor() {
//         super();
//         this.state = {
//             products: []
//         }
//         this.formData = createRef();
//     }
//     // addproduct handler method
//     add = (event) => {
//         event.preventDefault();
//         //console.log(formData.current)
//         const newProduct = {
//             product_name: this.formData.current.product_name.value,
//             price: this.formData.current.price.value,
//             qty: Number(this.formData.current.qty.value)
//         }
//         // add a new product inside products array
//         this.state.products.push(newProduct);
//         this.setState({
//             products: this.state.products
//         });
//         //console.log(products);
//     }
//     // increment qty value by 1
//     increQty = (event) => {
//         //console.log(event.target.value)
//         const indexOfArray = event.target.value;
//         this.state.products[indexOfArray].qty = this.state.products[indexOfArray].qty + 1;
//         this.setState({
//             products: this.state.products
//         });
//     }
//     // decrement qty value by 1
//     decreQty = (event) => {
//         const indexOfArray = event.target.value;
//         this.state.products[indexOfArray].qty = this.state.products[indexOfArray].qty - 1;
//         this.setState({
//             products: this.state.products
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Form onSubmit={this.add} ref={this.formData}>
//                     <Form.Group controlId="formBasicProductName">
//                         <Form.Label>Product Name:</Form.Label>
//                         <Form.Control type="text" placeholder="Enter Product Name" name="product_name" />
//                     </Form.Group>

//                     <Form.Group controlId="formBasicPrice">
//                         <Form.Label>Price:</Form.Label>
//                         <Form.Control type="number" placeholder="Price in Euro" name="price" />
//                     </Form.Group>

//                     <Form.Group controlId="formBasicQty">
//                         <Form.Label>Quantity:</Form.Label>
//                         <Form.Control type="number" placeholder="How many: qty" name="qty" />
//                     </Form.Group>

//                     <Button variant="primary" type="submit">
//                         Add to Inventory
//             </Button>
//                 </Form>
//                 <Table striped bordered hover variant="dark">
//                     <thead>
//                         <tr>
//                             <th>Index</th>
//                             <th>Product Name:</th>
//                             <th>Price</th>
//                             <th>Qty</th>
//                             <th>Options</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.products.map((item, index) => {
//                                 return (
//                                     <tr key={index}>
//                                         <td>{index}</td>
//                                         <td>{item.product_name}</td>
//                                         <td>{item.price}</td>
//                                         <td>{item.qty}</td>
//                                         <td>
//                                             <Button variant="success" onClick={event => this.increQty(event)} value={index}>+</Button>
//                                             <Button variant="danger" onClick={event => this.decreQty(event)} value={index}>-</Button>
//                                         </td>
//                                     </tr>
//                                 )
//                             })
//                         }
//                     </tbody>
//                 </Table>
//             </div>
//         )
//     }

// }