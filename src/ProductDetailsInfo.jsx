import {useOutletContext} from "react-router-dom";
import Button from "./Button";

export default function ProductDetailsInfo(props) {
  const product = useOutletContext();
  const {onProductAdd} = props;

  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd(product)}>${product.price}</Button>
    </>
  );
}