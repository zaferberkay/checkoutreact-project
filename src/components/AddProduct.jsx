import axios from "axios";
import { useState } from "react";

function AddProduct({ getProducts, productList }) {
  //* POST

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, image, price, amount };

    postProducts(newProduct);
    setAmount("");
    setImage("");
    setName("");
    setPrice("");
  };
  const postProducts = async (newProduct) => {
    const BASE_URL = "https://6367ad83f5f549f052d9f2e9.mockapi.io/api/products";
    try {
      await axios.post(BASE_URL, newProduct);
    } catch (error) {
      console.log(Error);
    }
    getProducts();
  };
  return (
    <div className=" container text-center p-3 fw-bold">
      <form onSubmit={handleSubmit} className="  p-2">
        <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="add-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="add-price"
            name="price"
            required
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-quantity" className="form-label">
            Product Quantity
          </label>
          <input
            type="number"
            name="amount"
            className="form-control"
            id="add-quantity"
            required
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <label htmlFor="add-image" className="form-label">
          Product Image
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            type="url"
            className="form-control"
            id="add-image"
            name="image"
            aria-describedby="basic-addon3"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm">
            <i className="fa-solid fa-cart-plus me-2"></i>Add To Cart
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
