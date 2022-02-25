import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div key={product.id} className='product'>
      {product.id} <Link to={"/products/" + product.id}>{product.name}</Link> ￥
      {product.price} {product.description}
    </div>
  );
};

export default Product;
