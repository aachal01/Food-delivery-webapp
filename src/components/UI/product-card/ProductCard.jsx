import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { db } from "../../../firebase";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = async () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );

    const cartItem = {
      id,
      title,
      image01,
      price,
    };
    try {
      // const db = firebase.firestore();
      const cartRef = db.collection("carts").doc();
      const docSnapshot = await cartRef.get();
      if (!docSnapshot.exists) {
        await cartRef.set({
          items: [cartItem],
        });
      } else {
        const existingCart = docSnapshot.data();
        await cartRef.update({
          items: [...existingCart.items, cartItem],
        });
      }
      dispatch(cartActions.addItem(cartItem));
    } catch (error) {
      console.error("Error adding item to cart", error);
    }
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
