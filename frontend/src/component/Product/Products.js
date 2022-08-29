import "./Products.css";
import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
// import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const { keyword } = useParams();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword));
  }, [dispatch, keyword]);

  return (
    <Fragment>
      <Fragment>
        <h2 className="productsHeading">Products</h2>

        <div className="products">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </Fragment>
    </Fragment>
  );
};

export default Products;
