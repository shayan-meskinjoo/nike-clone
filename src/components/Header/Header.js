import React, { useState } from "react";
import "./style/Header.css";
import logo from "../images/nike/home/swoosh-logo-black.jpg";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const bagItems = useSelector((state) => state.products.bagItems);

  const getTotalAmount = () => {
    let totalAmount = 0;
    bagItems.map((item) => {
      totalAmount += item.amount;
    });
    return totalAmount;
  };

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">
          <Link to="/"><img src={logo}></img></Link>
        </div>
        <div className="header__nav">
          <Link to="men">Men</Link>
          <Link to="women">Women</Link>
          <Link
            to="/productslist"
            state={{ gender: "unisex", category: "accessories" }}
          >
            Accessories
          </Link>
        </div>
        <div className="header__icons">
          <Link to="favorites">
            <FavoriteBorderOutlinedIcon />
          </Link>
          <Link to="cart" className="bag-icon">
            {getTotalAmount() > 0 ? (
              <div className="bag-amount">{getTotalAmount()}</div>
            ) : (
              ""
            )}
            <ShoppingBagOutlinedIcon />
          </Link>
        </div>

        <div className="header-sidebar">
          <div className="header-sidebar__logo">
            <Link to="/"><img src={logo}></img></Link>
          </div>
          <div className={`header-sidebar__nav ${isOpen && "isopen"}`}>
            <Link>
              <span></span>
              <button onClick={(e) => menuHandler(e)}>
                <CloseIcon />
              </button>
            </Link>
            <Link to="men">
              Men <ArrowForwardIosIcon />
            </Link>
            <Link to="women">
              Women <ArrowForwardIosIcon />
            </Link>
            <Link
              to="/productslist"
              state={{ gender: "unisex", category: "accessories" }}
            >
              Accessories <ArrowForwardIosIcon />
            </Link>
          </div>
          <div className="header-sidebar__icons">
            <Link to="favorites">
              <FavoriteBorderOutlinedIcon />
            </Link>
            <Link to="cart" className="bag-icon">
              {getTotalAmount() > 0 ? (
                <div className="bag-amount">{getTotalAmount()}</div>
              ) : (
                ""
              )}
              <ShoppingBagOutlinedIcon />
            </Link>
            <Link>
              <button onClick={(e) => menuHandler(e)}>
                <MenuIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
