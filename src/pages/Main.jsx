import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import ButtonBar from "../components/ButtonBar";
import ProductsCard from "../components/ProductsCard";
import CardTotal from "../components/CardTotal";

const Main = () => {
  const [productList, setProductList] = useState([]);

  const BASE_URL = "https://6367ad83f5f549f052d9f2e9.mockapi.io/api/products";
  const getProducts = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setProductList(data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(productList);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Header />
      <ButtonBar productList={productList} getProducts={getProducts} />

      {productList?.map((item) => (
        <ProductsCard getProducts={getProducts} {...item} key={item.id} />
      ))}
      <CardTotal productList={productList} />
    </div>
  );
};

export default Main;
