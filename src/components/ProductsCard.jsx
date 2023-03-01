import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { HiMinus, HiPlus } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";

function ProductsCard({
  id,
  name,
  price,
  amount,
  image,
  getProducts,
  pending,
}) {
  //*DELETE
  const [quant, setQuant] = useState(amount);

  const handleMinus = (id) => {
    // console.log("id minus",id);
    if (quant > 1) {
      setQuant(quant - 1);
    }
    // console.log("quant minus",quant);
    updateAmount(id, quant - 1);
  };
  const handlePlus = (id) => {
    // console.log("id plus",id);
    setQuant(quant + 1);
    // console.log("quant plus",quant);
    updateAmount(id, quant + 1);
  };
  const updateAmount = async (id, quant) => {
    //console.log(id);
    //console.log(quant);

    const BASE_URL = "https://6367ad83f5f549f052d9f2e9.mockapi.io/api/products";
    try {
      await axios.put(`${BASE_URL}/${id}/`, { amount: quant });
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProducts = async (id) => {
    const BASE_URL = "https://6367ad83f5f549f052d9f2e9.mockapi.io/api/products";
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getProducts();
  };

  return (
    <>
      {pending && (
        <div className="alert alert-warning fs-3 " role={alert}>
          Loading...
        </div>
      )}
      <div className="container d-flex justify-content-center align-items-center mb-4">
        <Row key={id}>
          <Card style={{ width: "18rem" }}>
            <Col>
              <Card.Img
                className=" mt-3 "
                variant="top"
                src={image}
                alt={name}
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
              </Card.Body>
              <Card.Text className="d-flex justify-content-center  display-4 fw-bold text-danger">
                $<span> {(price * 0.8).toFixed(2)}</span>
                <del className="fs-3">{price}</del>
              </Card.Text>
              <Card.Body>
                <div className="d-flex justify-content-center align-items-center border border-3 border-dark rounded  p-2">
                  <button
                    onClick={() => handleMinus(id)}
                    className="btn btn-warning"
                  >
                    <HiMinus />
                  </button>

                  <p className="m-auto p-3 fs-3">{quant}</p>

                  <button
                    onClick={() => handlePlus(id)}
                    className="btn btn-warning"
                  >
                    <HiPlus />
                  </button>
                </div>
              </Card.Body>

              <div className="d-flex justify-content-center align-items-center">
                <Button variant="danger" onClick={() => deleteProducts(id)}>
                  <FaTrashAlt className=" me-2 " />
                  Remove
                </Button>
              </div>

              <Card.Subtitle className="text-start my-3  text-muted">
                Product Total: {(price * 0.8 * quant).toFixed(2)}
              </Card.Subtitle>
            </Col>
          </Card>
        </Row>
      </div>
    </>
  );
}

export default ProductsCard;
