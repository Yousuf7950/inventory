import { Form , Button , Row ,Col } from "react-bootstrap";
import './createinventory.css'

export default function CreateInventory(){
    return(
        <div>
            <h1>Inventory</h1>
            <h2>Create new inventory</h2>
        
<Form>
  <div size="lg">
  <Row className="mb-3">
    
    <Form.Group as={Col} controlId="formGridProduct" class="inline" >
      <Form.Label >Inventory Category</Form.Label>
      <Form.Control type="text" placeholder="Enter inventory category" name="inventory_category" className="small" />
     <Form.Label >Items entered:2</Form.Label>
    </Form.Group>
   
    </Row>
    </div>
 

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>warehouse 1</option>
        <option>warehouse 2</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}