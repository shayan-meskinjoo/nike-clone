import React from "react";
import "./style/Women.css";
import { Link } from "react-router-dom";
import banner1 from "../images/nike/women/2a992f6c-560c-4110-8d3e-264dd62e361b.webp";
import banner1mobile from "../images/nike/women/f8cb3c91-a93a-4e7e-868f-536f82b6b518.webp";
import banner21 from "../images/nike/women/c02bd4b6-cd6d-4538-a53d-c50cf2a7fb30.webp";
import banner22 from "../images/nike/women/13d92c0e-d620-4518-bb32-ee9f47737157.webp";
import banner23 from "../images/nike/a763a13e-fd7c-43ab-b345-abf1ee09f440.webp";

import MemberShip from "../MemberShip/MemberShip";

export default function Women() {
  return (
    <div>
      <div className="banner-1-women">
        <div className="banner-1-women-header">
          <p>Women</p>
          <div className="banner-1-women-links">
            <Link>Shoes</Link>
            <Link>Clothing</Link>
            <Link>Accessories</Link>
          </div>
          <div></div>
        </div>
        <img src={banner1} className="banner-1-women-wide"></img>
        <img src={banner1mobile} className="banner-1-women-mobile"></img>

        <div className="banner-1-women-info">
          <h1>STYLISH SETS FOR EVERY MOVE</h1>
          <p>Bras and leggings to feel good on your body.</p>
          <div className="banner-1-women-info-btn">
            <Link>
              <button>Shop</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="banner-2-women-wide">
        <p>Shop the Essentials</p>
        <div className="banner-2-women-flex">
          <Link
            to="/productslist"
            state={{ gender: "women", category: "clothing" }}
          >
            <div className="banner-2-women-left">
              <img src={banner21}></img>
              <div className="banner-2-women-info">
                <p>Clothing</p>
                <button>Shop</button>
              </div>
            </div>
          </Link>
          <div className="banner-2-women-flex-2-women">
            <Link
              to="/productslist"
              state={{ gender: "women", category: "shoes" }}
            >
              <div className="banner-2-women-right">
                <img src={banner22}></img>
                <div className="banner-2-women-info">
                  <p>Shoes</p>
                  <button>Shop</button>
                </div>
              </div>
            </Link>
            <Link
              to="/productslist"
              state={{ gender: "unisex", category: "accessories" }}
            >
              <div className="banner-2-women-right-btm">
                <img src={banner23}></img>
                <div className="banner-2-women-info">
                  <p>Accessories</p>
                  <button>Shop</button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="banner-2-women-mobile">
        <p>Shop The Essentials</p>
        <div className="banner-2-women-scroll">
          <Link
            to="/productslist"
            state={{ gender: "women", category: "clothing" }}
          >
            <div className="banner-21-mobile">
              <img src={banner21}></img>
              <div className="banner-info">
                <p>Clothing</p>
                <button>Shop</button>
              </div>
            </div>
          </Link>
          <Link
            to="/productslist"
            state={{ gender: "women", category: "shoes" }}
          >
            <div className="banner-22-mobile">
              <img src={banner22}></img>
              <div className="banner-info">
                <p>Shoes</p>
                <button>Shop</button>
              </div>
            </div>
          </Link>
          <Link
            to="/productslist"
            state={{ gender: "unisex", category: "accessories" }}
          >
            <div className="banner-23-mobile">
              <img src={banner23}></img>
              <div className="banner-info">
                <p>Accessories</p>
                <button>Shop</button>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <MemberShip />
    </div>
  );
}
