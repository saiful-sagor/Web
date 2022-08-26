import React, { Fragment,useEffect } from "react";
import {CgMouse} from "react-icons/all";
import   "./home.css";
import Product from "./Product.js"
import MetaData from "../layout/MetaData" 
import { getProduct } from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux"




const product = {
  name : "Blue Tshirt",
  images: [{url: "https://i.ibb.co/DRST11n/1.webp"}],
  price: "$300",
  _id:"sagor",
};

const Home = () => {
   
  const dispatch = useDispatch();

  useEffect(() => {
   
    dispatch(getProduct());
   
  }, [dispatch]);

  return (
    <Fragment>
      <MetaData title = "Ecommerce" />

      <div className={`banner`} >
        <p>Welcome to Ecommerce</p>
        <h1>FIND YOUR FAVOURITE PRODUCTS HERE</h1>

        <a href="#container">
          <button>Scroll
              <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className = 'container' id = "container">

        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
      </div>
    </Fragment>
  );
};

export default Home;
