import { useState } from "react";
import Button from "react-bootstrap/Button";
import AddProduct from "./AddProduct";

function ButtonBar() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Show Product Bar");
  const toggle = () => {
    setShow(!show);
    const buttonText = show ? "Show Product Bar" : "Hide Product Bar";
    setText(buttonText);
  };

  return (
    <>
      <div className=" text-center  mb-2">
        <Button onClick={() => toggle()} variant="secondary" size="lg">
          {text}
        </Button>
        {show && <AddProduct />}
      </div>
    </>
  );
}

export default ButtonBar;
