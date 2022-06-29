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
        {"description":"500g apples","id":1,"image":"./img/product-apple.jpeg","name":"Apple","price":5,"price_id":"price_1LFtz6G9aZjj7j0DnFDkjwFs"},
        {"description":"500g avocado","id":2,"image":"./img/product-avocado.jpeg","name":"Avocado","price":12,"price_id":"price_1LFtzgG9aZjj7j0DyPP8QmJS"},
        {"description":"500g bananas","id":3,"image":"./img/product-banana.jpeg","name":"Banana","price":4,"price_id":"price_1LFtzzG9aZjj7j0D9jgzFD2W"},
        {"description":"500g hami","id":4,"image":"./img/product-hami.jpeg","name":"Hami","price":2.5,"price_id":"price_1LFu0GG9aZjj7j0DLpZb0cyL"},
        {"description":"500g kiwi","id":5,"image":"./img/product-kiwi.jpeg","name":"Kiwi","price":3.25,"price_id":"price_1LFu0XG9aZjj7j0DbCNVKcQn"},
        {"description":"500g lemon","id":6,"image":"./img/product-lemon.jpeg","name":"Lemon","price":5.75,"price_id":"price_1LFu0sG9aZjj7j0Dc71pmmjX"},
        {"description":"500g litchi","id":7,"image":"./img/product-litchi.jpeg","name":"Litchi","price":6.5,"price_id":"price_1LFu1CG9aZjj7j0DXeJxRzKW"},
        {"description":"500g strawberry","id":8,"image":"./img/product-strawberry.jpeg","name":"Strawberry","price":8,"price_id":"price_1LFu1RG9aZjj7j0DViAvMzb4"}
      ]
    ); 
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
