import React from "react";
import "./style/ProductDetail.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { addToBag } from "../../features/productsSlice";
import MemberShip from "../MemberShip/MemberShip";


export default function ProductDetail() {
  const { id } = useParams();
  const allProducts = useSelector((state) => state.products.allProducts);

  const product = allProducts.find((product) => product.id == id);

  const { img, name, desc, price, category, gender } = product;

  const dispatch = useDispatch();

  return (
    <div className="detail">
      <div className="detail-container">
        <div className="deatil-left">
          <img src={img}></img>
        </div>
        <div className="detail-right">
          <p className="detail-name">{name}</p>
          <p className="detail-gender">{`${gender}'s ${category}`}</p>
          <p className="detail-price">${price}</p>
          <p className="detail-desc">{desc}</p>
          <div className="detail-addbag">
            <button onClick={() => dispatch(addToBag(id))}>Add to Bag</button>
          </div>
          <div className="detail-addfav">
            <button>
              Favorite
              <FavoriteBorderOutlinedIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="detail-mobile-container">
        <div className="detail-mobile-top">
          <p className="detail-mobile-top-name">{name}</p>
          <p className="detail-mobile-top-gender">{`${gender}'s ${category}`}</p>
          <p className="detail-mobile-top-price">${price}</p>
        </div>
        <div className="detail-mobile-img">
          <img src={img}></img>
        </div>
        <div className="detail-mobile-addbag">
          <button onClick={() => dispatch(addToBag(id))}>Add to Bag</button>
        </div>
        <div className="detail-mobile-addfav">
          <button>
            Favorite
            <FavoriteBorderOutlinedIcon />
          </button>
        </div>
        <div className="detail-mobile-desc">
          <p>{desc}</p>
        </div>
      </div>

      {/* trending */}
      <MemberShip />
    </div>
  );
}
