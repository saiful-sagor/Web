import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/tshirt.jpg";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    size: window.innerWidth < 600 ? 20 : 25,
    activeColor: "tomato",
    value: 5,
    isHalf: true,
  };

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={image} alt={product.name} />
      <p>{product.name} </p>

      <div>
        <ReactStars {...options} /> <span>(256 Reviews)</span>
      </div>
      <span>{`$${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
