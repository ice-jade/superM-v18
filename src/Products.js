import { useState, useEffect } from "react";
import Product from "./Product.js";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";
import data from "./data.js";

export default function Products() {
  const [products, setProducts] = useState([]);
  // const { get, loading } = useFetch(
  //   "https://react-tutorial-demo.firebaseio.com/"
  // );

  useEffect(() => {
      setProducts(
        data.productInfo
      )
  }, []);

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {/* {loading && <Loader />} */}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
}
