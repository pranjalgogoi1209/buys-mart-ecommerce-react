import React from "react";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src="" alt="" />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Cart</li>
          {/* condition will apply bw login and logout */}
          <li>Login</li>
          {/* <li>Logout</li> */}
        </ul>
      </nav>
      <button>Profile</button>
    </header>
  );
}
