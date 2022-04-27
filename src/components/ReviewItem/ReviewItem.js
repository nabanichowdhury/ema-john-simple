import React from "react";
import "./ReviewItem.css";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = (props) => {
  const { handleRemoveProduct, product } = props;
  const { name, img, price, shipping, quantity } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-details">
        <div>
          <p className="product-name">Name:{name}</p>
          <p>
            Price: <span>{price}</span>{" "}
          </p>
          <p>Shipping:{shipping}</p>
          <p>Quantity:{quantity}</p>
        </div>
        <div className="delete-container">
          <button
            className="delete-button"
            onClick={() => handleRemoveProduct(product)}
          >
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
