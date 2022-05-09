import { useDispatch, useSelector } from "react-redux";
import { addToCart, isPendingSelect } from "../../../store/cartSlice";

const AddToCartButton = () => {
  const dispatch = useDispatch();
  const isPending = useSelector(isPendingSelect);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToCart({}));
  };

  return (
    <form onSubmit={() => handleSubmit()}>
      <label>
        qty: <input type="number" id="qty" name="qty" />
      </label>
      <input disabled={isPending} type="submit" value="Add to Cart" />
    </form>
  );
};

export default AddToCartButton;
