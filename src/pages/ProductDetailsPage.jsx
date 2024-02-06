/** @format */

import React, { useState, useEffect } from "react";
import styles from "../styles/pages/ProductDetailsPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const Card = ({ item, setSelProd }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div className={styles.card_title}>{item.title}</div>
      <img
        src={item.thumbnail}
        className={styles.card_img}
      />
      <div
        className={styles.actionButton}
        onClick={() => setSelProd(item)}>
        See Details
      </div>
    </div>
  );
};

const ProductDetailsPage = () => {
  let [prod, setProd] = useState([]);
  let [selProd, setSelProd] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProd(data.products);
        if (location.state) setSelProd(location.state);
        else setSelProd(data.products[0]);
      });
  }, []);
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

  const cartHandler = (item) => {
    let cart = JSON.parse(window.localStorage.getItem("@ecommCart"));
    if (cart) {
      item = { ...item, quantity: 1 };
      cart.push(item);
      window.localStorage.setItem("@ecommCart", JSON.stringify(cart));
    } else alert("Network Problem");
  };
  return (
    <div className={styles.page}>
      <div className={styles.leftPart}>
        <div
          className={styles.thumbnail}
          style={{ backgroundImage: `url(${selProd.thumbnail})` }}></div>
        <div className={styles.main}>
          <div className={styles.leftmain}>
            <h1>{selProd.title}</h1>
            <h5>{selProd.brand}</h5>
          </div>
          <div className={styles.rightmain}>
            <div>{renderStars(selProd.rating)}</div>{" "}
            <div>({selProd.rating})</div>
          </div>
        </div>
        <p className={styles.description}>
          <div className={styles.category}>#{selProd.category}</div>
          {selProd.description}
        </p>
        <div className={styles.images}>
          {selProd.images &&
            selProd.images.map((item, key) => {
              return (
                <img
                  src={item}
                  key={key}
                />
              );
            })}
        </div>
        <div className={styles.discount}>-{selProd.discountPercentage}%</div>
        <div className={styles.actions}>
          <button onClick={() => cartHandler(selProd)}>Add To Cart</button>
          <button>
            Buy Now <span>${selProd.price}</span> [$
            {Math.floor(
              selProd.price - (selProd.price * selProd.discountPercentage) / 100
            )}
            ]
          </button>
        </div>
        <div className={styles.flexboc}>
          {selProd.stock < 100 ? (
            <h5 style={{ color: "#f16363" }}>
              hurry up !!! only {selProd.stock % 20} left...
            </h5>
          ) : (
            <h5 style={{ color: "#32f62b" }}> In Stock...</h5>
          )}
        </div>
      </div>

      <div className={styles.rightPath}>
        <div className={styles.all}>
          {prod.map((item, key) => {
            return (
              <Card
                key={key}
                item={item}
                setSelProd={setSelProd}
              />
            );
          })}
        </div>
        <div className={styles.points}>
          <ul>
            <li>12 days return policy</li>
            <li>Cash On Delivery Available</li>
            <li>Buys-mart Assured</li>
            <li>Get extra 12% discount on ICICI card</li>
            <li>No-Cost EMI available</li>
            <li>
              Get Live-Tracking of order <a href="#">here</a>
            </li>
            <li>Terms and Conditions Applied</li>
          </ul>
        </div>
        <div className={styles.actionside}>
          <button onClick={() => navigate(-1)}>Back</button>
          <button onClick={() => navigate("/cart")}>Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
