import React from 'react';
import {ReactNavbar} from "overlay-navbar";
import logo from "../../../images/logo.png";


const options = {
    burgerColorHover: "#eb4034",
    logo,
    searchIcon: true,
    cartIcon: true,
    profileIcon: true,
    burgerColor:"#4FA8EC",
    logoWidth: "20vmax",
    navColor1: "white",
    logoHoverSize: "10px",
    logoHoverColor: "#eb4034",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    link1Size: "1.3vmax",
    link1Color: "rgba(35, 35, 35,0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",
    profileIconUrl: "/login",
    profileIconColor: "rgba(35, 35, 35,0.8)", 
    searchIconColor: "rgba(35, 35, 35,0.8)",
    cartIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#eb4034",
    searchIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
    cartIconMargin: "1vmax",
    searchIconMargin:	"0",
    profileIconMargin:	"0",
    searchIconSize:	"2vmax",
    cartIconSize:	"2vmax",
    profileIconSize:	"2.5vmax",
    searchIconTransition:	0.5,
    cartIconTransition:	0.5,
    profileIconTransition:	0.5,

  };
  
  const Header = () => {
    return <ReactNavbar {...options}
    
    />;
  };

export default Header