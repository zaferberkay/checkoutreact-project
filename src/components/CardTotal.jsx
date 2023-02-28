import { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaTrashAlt } from "react-icons/fa";

function CardTotal() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="container d-flex text-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/114754-1-2_large.jpg"
        />
        <Card.Body>
          <Card.Title>ProductName</Card.Title>
        </Card.Body>
        <Card.Body>
          <div className="d-flex">
            <button
              onClick={() => count > 0 && setCount(count - 1)}
              className="btn btn-warning"
            >
              -
            </button>

            <p className="m-auto p-3 fs-3">{count}</p>

            <button onClick={increment} className="btn btn-warning">
              +
            </button>
          </div>
        </Card.Body>
        <Card.Text>$</Card.Text>

        <Button variant="danger">
          <FaTrashAlt />
          Remove
        </Button>
        <Card.Subtitle className="mb-2 text-muted">
          Product Total:{" "}
        </Card.Subtitle>
      </Card>
    </div>
  );
}

export default CardTotal;
