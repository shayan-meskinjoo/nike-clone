import React from "react";
import "./style/TrendProducts.css";
import { useSelector } from "react-redux";
import TrendCard from "../TrendCard/TrendCard";
import Slider from "react-slick";
import { setting } from "../setting";

export default function TrendProducts() {
  const allProducts = useSelector((state) => state.products.allProducts);
  const trendList = allProducts.filter((item) => item.trending === true);

  return (
    <div className="trend-list">
      <p className="trend-text">Trendigs</p>
      <Slider {...setting}>
        {trendList.map((item) => (
          <TrendCard data={item} />
        ))}
      </Slider>
    </div>
  );
}
