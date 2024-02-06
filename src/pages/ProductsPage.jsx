/** @format */

import React, { useEffect, useState } from "react";
import styles from "../styles/pages/productsPage.module.css";
import { useNavigate } from "react-router-dom";

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span
        className={styles.stars}
        key={i}>
        &#9733;
      </span>
    );
  }

  if (halfStar) {
    stars.push(
      <span
        className={styles.stars}
        key="half">
        &#9734;
      </span>
    );
  }

  return stars;
};

const Card = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate("/product", { state: item });
  };
  return (
    <div
      className={styles.prodCard}
      onClick={() => handleClick(item)}>
      <h2>{item.title}</h2>
      <div
        className={styles.prodThumbNail}
        style={{ backgroundImage: `url(${item.thumbnail})` }}></div>
      <div className={styles.flexboc}>
        <h5>{item.brand}</h5>
        <h5>{renderStars(item.rating)}</h5>
      </div>
      <p>{item.description}</p>
      <div className={styles.flexboc}>
        {item.stock < 10 ? (
          <h5 style={{ color: "#f62b2b" }}>
            hurry up !!! only {item.stock} left...
          </h5>
        ) : (
          <h5>Stock : {item.stock}</h5>
        )}
        <h5>Price : $ {item.price}</h5>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  let [prod, setProd] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProd(data.products));
  }, []);

  return (
    <div className={styles.prodCardBox}>
      {prod.map((item, key) => {
        return (
          <Card
            item={item}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default ProductsPage;
