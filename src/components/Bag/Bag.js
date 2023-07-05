import React from "react";
import "./style/Bag.css";
import { useSelector } from "react-redux";
import BagItemCard from "../BagItemCard/BagItemCard";

export default function Bag() {
  const bagItems = useSelector((state) => state.products.bagItems);
  const allProducts = useSelector((state) => state.products.allProducts);

  const getProduct = (id) => {
    const product = allProducts.find((product) => product.id === id);
    return product;
  };

  const getTotalCost = () => {
    let totalCost = 0;
    bagItems.map((item) => {
      const productData = getProduct(item.id);
      totalCost += item.amount * productData.price;
    });
    return totalCost;
  };

  const Shipping = getTotalCost() > 0 ? 7 : 0;
  const total = getTotalCost() + Shipping;

  return (
    <div className="bag">
      <div className="bag-container">
        <div className="bag-left">
          <div className="bag-text">
            <p>Bag</p>
          </div>
          <div className="bag-items">
            {bagItems.map((item) => (
              <BagItemCard data={item} />
            ))}
          </div>
        </div>

        <div className="bag-summary">
          <p className="bag-summary-title">Summary</p>
          <div className="bag-summary-divs">
            <p className="bag-summary-p">Subtotal</p>
            <p className="bag-summary-p">${getTotalCost().toFixed(2)}</p>
          </div>
          <div className="bag-summary-divs">
            <p className="bag-summary-p">Estimated Shipping & Handling</p>
            <p className="bag-summary-p">${Shipping.toFixed(2)}</p>
          </div>
          <div className="bag-summary-divs">
            <p className="bag-summary-p">Estimated Tax</p>
            <p className="bag-summary-p">-</p>
          </div>
          <hr></hr>
          <div className="bag-summary-divs">
            <p className="bag-summary-p">Total</p>
            <p className="bag-summary-p">${total.toFixed(2)}</p>
          </div>
          <hr></hr>
          <button className="checkout-btn">Checkout</button>
          <button className="paypal-btn">PayPal</button>
        </div>
      </div>
    </div>
  );
}
