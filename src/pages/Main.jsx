import { useState } from "react";
import Button from "react-bootstrap/Button";
import AddProduct from "../components/AddProduct";
import CardTotal from "../components/CardTotal";

function Main() {
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
        <CardTotal />
      </div>
    </>
  );
}

export default Main;
