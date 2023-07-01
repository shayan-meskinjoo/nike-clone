import React from "react";
import "./styles/Men.css";
import { Link } from "react-router-dom";
import banner1 from "../images/nike/men-s-shoes-clothing-accessories.jpg";
import banner1mobile from "../images/nike/17aeb073-86fa-41ec-81e1-9c36f7b3c07d.webp";
import banner21 from "../images/nike/40574f20-994a-4b82-a1ba-498f165c48cd.webp";
import banner22 from "../images/nike/817c49e0-7942-4977-a42b-303e020ca235.webp";
import banner23 from "../images/nike/a763a13e-fd7c-43ab-b345-abf1ee09f440.webp";
import MemberShip from "../MemberShip/MemberShip";

export default function Men() {
  return (
    <div>
      <div className="banner-1">
        <div className="banner-1-header">
          <p>Men</p>
          <div className="banner-1-links">
            <Link>Shoes</Link>
            <Link>Clothing</Link>
            <Link>Accessories</Link>
          </div>
          <div></div>
        </div>
        <img src={banner1} className="banner-1-wide"></img>
        <img src={banner1mobile} className="banner-1-mobile"></img>

        <div className="banner-1-info">
          <h1>OUTDOOR ADVENTURE STYLES</h1>
          <p>
            Explore running gear designed to keep up with wherever the path
            takes you.
          </p>
          <div className="banner-1-info-btn">
            <Link>
              <button>Shop</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="banner-2-wide">
        <p>Shop the Essentials</p>
        <div className="banner-2-flex">
          <Link
            to="/productslist"
            state={{ gender: "men", category: "clothing" }}
          >
            <div className="banner-2-left">
              <img src={banner21}></img>
              <div className="banner-2-info">
                <p>Clothing</p>
                <button>Shop</button>
              </div>
            </div>
          </Link>
          <div className="banner-2-flex-2">
            <Link
              to="/productslist"
              state={{ gender: "men", category: "shoes" }}
            >
              <div className="banner-2-right">
                <img src={banner22}></img>
                <div className="banner-2-info">
                  <p>Shoes</p>
                  <button>Shop</button>
                </div>
              </div>
            </Link>
            <Link
              to="/productslist"
              state={{ gender: "unisex", category: "accessories" }}
            >
              <div className="banner-2-right-btm">
                <img src={banner23}></img>
                <div className="banner-2-info">
                  <p>Accessories</p>
                  <button>Shop</button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="banner-2-mobile">
        <p>Shop The Essentials</p>
        <div className="banner-2-scroll">
          <div className="banner-21-mobile">
            <img src={banner21}></img>
            <div className="banner-info">
              <p>Clothing</p>
              <button>Shop</button>
            </div>
          </div>
          <div className="banner-22-mobile">
            <img src={banner22}></img>
            <div className="banner-info">
              <p>Shoes</p>
              <button>Shop</button>
            </div>
          </div>
          <div className="banner-23-mobile">
            <img src={banner23}></img>
            <div className="banner-info">
              <p>Accessories</p>
              <button>Shop</button>
            </div>
          </div>
        </div>
      </div>

      <MemberShip />
    </div>
  );
}
