import React from "react";
import { Link } from "react-router-dom";
import "./style/ProductCard.css";

export default function ProductCard({ data }) {
  const { img, name, price } = data;
  return (
    <div className="card">
      <Link>
        <img src={img}></img>
      </Link>
      <h3>{name}</h3>
      <p>3 colors</p>
      <h4>$ {price}</h4>
    </div>
  );
}
