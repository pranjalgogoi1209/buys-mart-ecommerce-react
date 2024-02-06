/** @format */

import React, { useEffect, useState } from "react";
import styles from "../styles/pages/cartpage.module.css";
import { MdDeleteForever } from "react-icons/md";
import { FaRegSquareMinus } from "react-icons/fa6";
import { FaRegPlusSquare } from "react-icons/fa";

const Order = ({ item, deleteHandler, minusHandler, plusHandler }) => {
  let price = Math.floor(
    item.price - (item.price * item.discountPercentage) / 100
  );

  return (
    <div className={styles.order}>
      <div>{item.title}</div>
      <div>{item.brand}</div>
      <div>${price}</div>
      <div className={styles.quantity}>
        <FaRegSquareMinus
          className={styles.signs}
          onClick={() => minusHandler(item)}
        />{" "}
        {item.quantity}{" "}
        <FaRegPlusSquare
          className={styles.signs}
          onClick={() => plusHandler(item)}
        />{" "}
      </div>
      <div>${price * item.quantity}</div>
      <div>
        <MdDeleteForever
          className={styles.signs}
          onClick={() => deleteHandler(item)}
        />
      </div>
    </div>
  );
};
const CartPage = () => {
  let [cart, setCart] = useState([]);
  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem("@ecommCart"));
    setCart(data);
  }, []);
  const deleteHandler = (item) => {
    let newCart = cart.filter((load) => load.id !== item.id);
    setCart(newCart);
    window.localStorage.setItem("@ecommCart", JSON.stringify(newCart));
  };
  const plusHandler = (item) => {
    let newCart = cart.map((load) => {
      if (load.id === item.id) {
        load.quantity = load.quantity + 1;
        return load;
      } else return load;
    });
    setCart(newCart);
    window.localStorage.setItem("@ecommCart", JSON.stringify(newCart));
  };
  const minusHandler = (item) => {
    let newCart = cart.map((load) => {
      if (load.id === item.id) {
        if (load.quantity > 1) load.quantity = load.quantity - 1;
        return load;
      } else return load;
    });
    setCart(newCart);
    window.localStorage.setItem("@ecommCart", JSON.stringify(newCart));
  };
  return (
    <div>
      <div className={styles.cartArea}>
        <div className={styles.actions}>
          <button>Shop More</button>
          <button>Buy</button>
        </div>
        {cart.map((item, key) => {
          return (
            <Order
              item={item}
              key={key}
              deleteHandler={deleteHandler}
              minusHandler={minusHandler}
              plusHandler={plusHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;
