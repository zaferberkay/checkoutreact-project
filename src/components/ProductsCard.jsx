import Button from "react-bootstrap/Button";

import { HiMinus, HiPlus } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";

function ProductsCard({ id, name, price, amount, image, getProducts }) {
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
    <div className="container  ">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-5 d-flex ">
            <img
              src={image}
              className=" img-thumbnail rounded-start"
              alt={name}
              title={name}
            />
          </div>
          <div className=" rightback col-md-7 d-flex align-items-center">
            <div className="card-body  ">
              <h5 className="card-title text-center fs-1">{name}</h5>
              <div className="product-price ps-2">
                <p className="text-danger fs-2 fw-bold">
                  $
                  <span className="damping-price">
                    {(price * 0.8).toFixed(2)}
                  </span>
                  <span className="h5 text-dark text-decoration-line-through">
                    {parseFloat(price).toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center ">
                <div className="quantity-controller px-3 py-3 d-flex border border-3  fw-bold  rounded-pill">
                  <Button
                    onClick={() => handleMinus(id)}
                    className="me-3 btn-warning fw-bold"
                  >
                    <HiMinus />
                  </Button>

                  <p className="m-auto  fs-3">{quant}</p>

                  <Button
                    onClick={() => handlePlus(id)}
                    className="ms-3 btn-warning fw-bold"
                  >
                    <HiPlus />
                  </Button>
                </div>
              </div>
              <Button
                className="my-3 w-100"
                variant="danger"
                onClick={() => deleteProducts(id)}
              >
                <FaTrashAlt className="me-2" />
                Remove
              </Button>
              <div className="mt-2">
                Product Total: $
                <span className="product-line-price">
                  {(+price * 0.8 * +quant).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
