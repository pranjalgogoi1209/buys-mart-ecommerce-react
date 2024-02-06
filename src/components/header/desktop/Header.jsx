import React from "react";
import styles from "./../../../styles/components/header/desktop/header.module.css";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* logo */}
      <div className={styles.logo}>
        {/* <img src="#" alt="logo" /> */}
        Buys-Mart
      </div>

      {/* navlinks */}
      <nav className={styles.navlinks}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/cart"}>Cart</Link>
        {/* condition will apply bw login and logout */}
        <Link href={"/login"}>Login</Link>
        {/* <Link href={"/logout"}>Logout</Link> */}
      </nav>

      {/* userProfile */}
      <Link href={"/profile"} className={styles.btn}>
        <div className={styles.userProfile}>
          <CiUser />
        </div>
      </Link>

      {/* slidebar opener*/}
      <div className={styles.sidebarOpener}>
        <FaBarsStaggered />
      </div>

      <slidebar />
    </header>
  );
}
