import React from "react";
import { Link } from "react-router-dom";
import "./style/ProductCard.css";

export default function ProductCard({ data }) {
  const { id, img, name, price, category, gender } = data;
  return (
    <div className="card">
      <Link to={`/productdetail/${id}`}>
        <img src={img}></img>
        <p className="card-name">{name}</p>
        <p className="card-colors">{`${gender}'s ${category}`}</p>
        <p className="card-colors">3 Colors</p>
        <p className="card-price">$ {price}</p>
      </Link>
    </div>
  );
}
