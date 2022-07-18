import Button from "./Button.js";
import { useDispatch } from "react-redux";
import { addProduct } from "./redux/cart_slice.js";

export default function ProductDetailInfo({ product }) {
  const dispatch = useDispatch();

  function onProductAdd() {
    dispatch(addProduct(product))
  }

  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd()}>${product.price}</Button>
    </>
  );
}
