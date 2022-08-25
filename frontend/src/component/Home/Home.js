import React, { Fragment } from "react";
import {CgMouse} from "react-icons/all";
import   "./home.css";
import Product from "./Product.js"
import MetaData from "../layout/MetaData" 



const product = {
  name : "Blue Tshirt",
  images: [{url: "https://i.ibb.co/DRST11n/1.webp"}],
  price: "$300",
  _id:"sagor",
};

const Home = () => {
   


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
