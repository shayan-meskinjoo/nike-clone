import React from "react";
import "./style/TrendCard.css";
import { Link } from "react-router-dom";

export default function TrendCard({ data }) {
  const { id, img, name} = data;
  return (
    <div className="trendcard">
      <img src={img}></img>
      <Link to={`/productdetail/${id}`}>
        <p className="trendcard-name">{name}</p>
      </Link>
    </div>
  );
}
