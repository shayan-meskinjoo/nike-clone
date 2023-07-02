import React, { useState } from "react";
import "./style/Header.css";
import logo from "../images/nike/home/swoosh-logo-black.jpg";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">
          <img src={logo}></img>
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
          <Link>
            <FavoriteBorderOutlinedIcon />
          </Link>
          <Link>
            <ShoppingBagOutlinedIcon />
          </Link>
        </div>

        <div className="header-sidebar">
          <div className="header-sidebar__logo">
            <img src={logo}></img>
          </div>
          <div className={`header-sidebar__nav ${isOpen && "isopen"}`}>
            <Link>
              <span></span>
              <button onClick={() => setIsOpen(!isOpen)}>
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
            <Link>
              <FavoriteBorderOutlinedIcon />
            </Link>
            <Link>
              <ShoppingBagOutlinedIcon />
            </Link>
            <Link>
              <button onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
