import React, { useState } from "react";
import styles from "./../../../styles/components/header/desktop/header.module.css";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import Sidebar from "./../mobile/Sidebar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <header className={styles.header}>
      {/* logo */}
      <div className={styles.logo}>
        {/* <img src="#" alt="logo" /> */}
        Buys-Mart
      </div>

      {/* navlinks */}
      <nav className={styles.navlinks}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/products/:id"}>Cart</Link>
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

      {/* sidebar opener*/}
      <div
        className={styles.sidebarOpener}
        onClick={() => {
          setIsSidebarOpen(true);
          console.log("sidebar opened");
        }}
      >
        <FaBarsStaggered />
      </div>

      {isSidebarOpen && (
        <Sidebar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      )}
    </header>
  );
}
