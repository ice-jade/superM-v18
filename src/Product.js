import { Link } from "react-router-dom";
import Button from "./Button.js";
import Loader from "./Loader.js";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "./redux/cart_slice.js";

export default function Product(props) {
  const [loading, setLoading] = useState(true)
  const { product } = props;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const productFromCart = cart.find(
    (item) => item.id === product.id
  );
  const quantity = productFromCart ? productFromCart.quantity : 0;

  let img = new Image();
  img.src = product.image;
  img.onload = function handleImgLoad() {
    setLoading(false);
  }

  function onProductAdd() {
    dispatch(addProduct(product));
  }

  function onProductDelete() {
    dispatch(removeProduct(product));
  }

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/products/${product.id}`}>
          {loading && <Loader dimension={100}></Loader>}
          {!loading && <img
            src={product.image}
            height="100"
            className="product-image"
            alt={product.name}
          />}
        </Link>
        {quantity > 0 && (
          <div className="product-quantity-container">
            <div className="product-quantity">{quantity}</div>
          </div>
        )}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div className="product-checkout">
        <div>
          {quantity > 0 && (
            <Button
              outline
              onClick={onProductDelete}
              className="product-delete"
            >
              x
            </Button>
          )}
        </div>
        <Button outline onClick={onProductAdd}>
          ${product.price}
        </Button>
      </div>
    </div>
  );
}
