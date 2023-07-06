import React from "react";
import "./style/FavoriteItemCard.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../../features/productsSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";

export default function FavoriteItemCard({ data }) {
  const { id } = data;
  const allProducts = useSelector((state) => state.products.allProducts);
  const product = allProducts.find((item) => item.id === id);

  const { img, name, price, category, gender } = product;

  const dispatch = useDispatch();

  return (
    <div>
      <div className="fav-card-top">
        <Link to={`/productdetail/${id}`}>
          <img src={img}></img>
        </Link>
        <div className="fav-card-info">
          <div className="fav-card-header">
            <Link to={`/productdetail/${id}`}>
              <p className="fav-card-name">{name}</p>
            </Link>
            <p className="fav-card-price">${price.toFixed(2)}</p>
          </div>
          <p className="fav-card-gender">{`${gender}'s ${category}`}</p>
          <div className="fav-card-btn">
            <button onClick={() => dispatch(removeFromFav(id))}>
              <DeleteOutlineIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
