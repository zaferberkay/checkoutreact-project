function AddProduct() {
  return (
    <div className=" container text-center p-3 fw-bold">
      <form className="  p-2">
        <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="add-name"
            required=""
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
            required=""
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
            required=""
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
            required=""
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
