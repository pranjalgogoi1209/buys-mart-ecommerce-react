import React from "react";
import styles from "../../styles/components/header/Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="logo">
        <img src="#" alt="logo" />
      </div>
      <nav className={styles.navlinks}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/products/:id"}>Cart</Link>
        {/* condition will apply bw login and logout */}
        <Link href={"/login"}>Login</Link>
        {/* <Link href={"/logout"}>Logout</Link> */}
      </nav>
      <Link href={"/profile"} className={styles.btn}>
        <button>Profile</button>
      </Link>
    </header>
  );
}
