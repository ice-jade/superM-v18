import { useState, useEffect } from "react";
import Product from "./Product.js";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    "https://react-tutorial-demo.firebaseio.com/"
  );

  useEffect(() => {
    setProducts(
      [
        {"description":"500g apples","id":1,"image":"../public/img/product-app.jpeg","name":"Apple","price":5,"price_id":"price_1HuavSGuhXEITAut56IgndJf"},
        {"description":"500g avocado","id":2,"image":"../public/img/product-avocado.jpeg","name":"Avocado","price":12,"price_id":"price_1HxVriGuhXEITAutt5KUKo2V"},
        {"description":"500g bananas","id":3,"image":"../public/img/product-banana.jpeg","name":"Banana","price":4,"price_id":"price_1HxW4YGuhXEITAutgcWugXH7"},
        {"description":"500g hami","id":4,"image":"../public/img/product-hami.jpeg","name":"Hami","price":2.5,"price_id":"price_1HxW59GuhXEITAutCwoYZoOJ"},
        {"description":"500g kiwi","id":4,"image":"../public/img/product-kiwi.jpeg","name":"Kiwi","price":3.25,"price_id":"price_1HxW59GuhXEITAutCwoYZoOJ"},
        {"description":"500g lemon","id":4,"image":"../public/img/product-lemon.jpeg","name":"Lemon","price":5.75,"price_id":"price_1HxW59GuhXEITAutCwoYZoOJ"},
        {"description":"500g litchi","id":4,"image":"../public/img/product-litchi.jpeg","name":"Litchi","price":6.5,"price_id":"price_1HxW59GuhXEITAutCwoYZoOJ"},
        {"description":"500g strawberry","id":4,"image":"../public/img/product-strawberry.jpeg","name":"Strawberry","price":8,"price_id":"price_1HxW59GuhXEITAutCwoYZoOJ"}])
  }, []);

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
