import React from "react";
import "./style/Home.css";
import { Link } from "react-router-dom";
import banner1 from "../images/nike/home/b8689862-cec8-49e9-bbed-0674f891ba8e.webp";
import banner1mobile from "../images/nike/home/eb9b5b48-8868-4f8a-8fee-4bc4536ee966.webp";
import banner2 from "../images/nike/home/nike-just-do-it.jpg";
import banner2mobile from "../images/nike/home/9cddde26-f335-4989-a72d-ab76f1f49124.webp";

import MemberShip from "../MemberShip/MemberShip";
import TrendProducts from "../TrendProducts/TrendProducts";

export default function Home() {
  return (
    <div>
      <div className="banner-1">
        <div className="banner-1-wide">
          <img src={banner1}></img>
          <div className="banner-1__info">
            <h1>20% OFF SELECT STYLES</h1>
            <p>
              Members: Sine in and use code SUMMER to save. End 6.26. Exclusions
              apply.
            </p>
            <Link>
              <button>Shop</button>
            </Link>
          </div>
        </div>
        <div className="banner-1-mobile">
          <img src={banner1mobile}></img>
          <p>
            Members: Sine in and use code SUMMER to save. End 6.26. Exclusions
            apply.
          </p>
          <Link>
            <button>Shop</button>
          </Link>
        </div>
      </div>

      <div className="banner-2">
        <div className="banner-2-wide">
          <p>Connect With Mother Nature</p>
          <img src={banner2}></img>
        </div>

        <div className="banner-2-mobile">
          <p>Connect With Mother Nature</p>
          <img src={banner2mobile}></img>
        </div>
      </div>

      <div className="banner-3">
        <h1>ADVENTURE ESSENTIALS</h1>
        <p>Styles designed to take on the wildest parts of any trip.</p>
        <div className="banner-3-btns">
          <Link to="men">
            <button>Shop Men's</button>
          </Link>
          <Link to="women">
            <button>Shop Women's</button>
          </Link>
          <Link
            to="/productslist"
            state={{ gender: "unisex", category: "accessories" }}
          >
            <button>Shop Accessories</button>
          </Link>
        </div>
      </div>

      {/* trending products cruasel */}
      <TrendProducts />
      <MemberShip />
    </div>
  );
}
