import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Table } from "react-bootstrap";

const MainPage = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/mainInventory";
    navigate(path);
  };
  return (
    <div>
      Welcome to NHMS Inventory
      <Button
        variant="primary"
        type="submit"
        onClick={routeChange}
        style={{ margin: "20px" }}
      >
        Create Inventory
      </Button>
    </div>
  );
};

export default MainPage;
