import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  isLoadingSelect,
  productDetailSelect,
  fetchProductDetail,
} from "./productDetailSlice";
import { useEffect } from "react";
import AddCart from "./AddCart/AddCart";

function ProductDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelect);
  const productDetail = useSelector(productDetailSelect);

  useEffect(() => {
    dispatch(fetchProductDetail(params.productId));
  }, [dispatch, params.productId]);

  return (
    <div className="productDetail">
      {isLoading ? <div>Loading...</div> : ""}
      <h2>{productDetail.name}</h2>
      <div>￥{productDetail.price}</div>
      <p>{productDetail.description}</p>
      <AddCart />
    </div>
  );
}

export default ProductDetail;
