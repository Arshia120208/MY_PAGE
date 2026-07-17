import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <h2>TradeHub</h2>
        </Link>
      </div>

      {/* Location */}
      <div className="location">
        <select>
          <option>Punjab</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
        </select>
      </div>

      {/* Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products, mobiles, bikes..."
        />

        <Link to="/search">
          <button>
          </button>
        </Link>
      </div>

      {/* Categories */}
      <div className="categories">
        <Link to="/categories">
          <select>
            <option>All Categories</option>
            <option>Mobiles</option>
            <option>Cars</option>
            <option>Bikes</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Furniture</option>
          </select>
        </Link>
      </div>

      {/* Navigation Icons */}
      <div className="nav-icons">

        <Link to="/wishlist" className="icon-btn">
        </Link>

        <Link to="/cart" className="icon-btn">
        </Link>

        <Link to="/login" className="icon-btn">
          <span>Login</span>
        </Link>

        <Link to="/sell" className="sell-btn">
          Sell
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;