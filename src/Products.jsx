import { useState, useEffect } from "react";
import Product from "./Product";
import useFetch from "./useFetch";
import Loading from "./Loading";

export default function Products(props) {
  const [products, setProducts] = useState([]);

  const baseUrl = 'https://react-tutorial-demo.firebaseio.com/';
  const { get, loading } = useFetch(baseUrl);

  useEffect(() => {
    get("supermarket.json")
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log("Could not load products", error));
  }, []);

  const {cart,onProductAdd, onProductDelete} = props;

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loading />}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={cart}
              onProductAdd={onProductAdd}
              onProductDelete={onProductDelete}
            ></Product>
          );
        })}
      </div>
    </div>
  );
}