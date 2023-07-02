import React, { useEffect } from "react";
import "./style/ProductsList.css"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { filterProducts } from "../../features/productsSlice";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductsList() {
  const location = useLocation();
  const gender = location.state.gender;
  const category = location.state.category;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterProducts({ gender, category }));
  }, [dispatch, gender, category]);

  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  return (
    <div className="list-container">
      <div className="list-container-top">
        <div><p>{`${gender}'s ${category}`}</p></div>
      </div>
      <div className="products-list">
        {filteredProducts.map((product) => (
          <ProductCard data={product} />
        ))}
      </div>

      {/* trending list */}
    </div>
  );
}
