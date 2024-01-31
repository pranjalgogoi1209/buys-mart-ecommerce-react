import React from "react";
import styles from "./../../../styles/components/header/mobile/sidebar.module.css";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

export default function Sidebar({ setIsSidebarOpen, isSidebarOpen }) {
  return (
    <div
      className={`${styles.sidebar} ${isSidebarOpen ? styles.showSidebar : ""}`}
    >
      <header className={styles.header}>
        <div className={styles.logo}>Buys-Mart</div>
        <div
          className={styles.sidebarCloser}
          onClick={() => {
            setIsSidebarOpen(false);
            console.log("sidebar closed");
          }}
        >
          <MdOutlineCancel />
        </div>
      </header>
      <nav className={styles.navlinks}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/products/:id"}>Cart</Link>
        {/* condition will apply bw login and logout */}
        <Link href={"/login"}>Login</Link>
        {/* <Link href={"/logout"}>Logout</Link> */}
        {/* userProfile */}
        <Link href={"/profile"}>
          <div className={styles.userProfile}>
            <CiUser />
          </div>
        </Link>
      </nav>
    </div>
  );
}
