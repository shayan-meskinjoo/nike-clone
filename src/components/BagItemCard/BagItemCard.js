import React from "react";
import "./style/BagItemCard.css";
import { useDispatch, useSelector } from "react-redux";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
  decreament,
  increament,
  removeFromBag,
} from "../../features/productsSlice";

export default function BagItemCard({ data }) {
  const { id, amount } = data;
  const allProducts = useSelector((state) => state.products.allProducts);
  const product = allProducts.find((item) => item.id === id);

  const { img, name, price, category, gender } = product;

  const dispatch = useDispatch();

  return (
    <div className="bag-card">
      <div className="bag-card-top">
        <img src={img}></img>
        <div className="bag-card-info">
          <div className="bag-card-header">
            <p className="bag-card-name">{name}</p>
            <p className="bag-card-price">${(price * amount).toFixed(2)}</p>
          </div>
          <p className="bag-card-gender">{`${gender}'s ${category}`}</p>

          <div className="bag-card-quantity">
            <div className="bag-card-quantity-text">Quantity:</div>
            <div className="bag-card-quantity-actions">
              <button onClick={() => dispatch(decreament(id))}>
                <IndeterminateCheckBoxIcon />
              </button>
              <p>{amount}</p>
              <button onClick={() => dispatch(increament(id))}>
                <AddBoxIcon />
              </button>
            </div>
          </div>

          <div className="bag-card-btn">
            <button>
              <FavoriteBorderOutlinedIcon />
            </button>
            <button onClick={() => dispatch(removeFromBag(id))}>
              <DeleteOutlineIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="bag-card-bottom">
        <p>Shipping</p>
        <p>Arrives by Wed, july 12</p>
      </div>
    </div>
  );
}
