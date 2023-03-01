import { useState } from "react";
import Button from "react-bootstrap/Button";
import AddProduct from "./AddProduct";

function ButtonBar({ getProducts, productList }) {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("Hide Add Product Bar");
  const toggle = () => {
    setShow(!show);
    const buttonText = show ? "Show Add Product Bar" : "Hide Add Product Bar";
    setText(buttonText);
  };

  return (
    <>
      <div className=" text-center  mb-2">
        <Button onClick={() => toggle()} variant="secondary" size="lg">
          {text}
        </Button>
        {show && (
          <AddProduct productList={productList} getProducts={getProducts} />
        )}
      </div>
    </>
  );
}

export default ButtonBar;
