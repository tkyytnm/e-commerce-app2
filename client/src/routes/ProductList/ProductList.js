import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductList,
  isLoadingSelect,
  productListSelect,
} from "../../store/productSlice";
import { useEffect } from "react";
import Product from "./Product";

function ProductList() {
  const dispatch = useDispatch();

  const isLoading = useSelector(isLoadingSelect);
  const productList = useSelector(productListSelect);

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  return (
    <>
      <h2>Products</h2>
      {isLoading ? <div>Loading...</div> : ""}
      {productList.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </>
  );
}

export default ProductList;
