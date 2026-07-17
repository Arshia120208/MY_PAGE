import React from "react";
import "./ProductDetails.css";

function ProductDetails() {
  const product = {
    id: 1,
    title: "iPhone 15 Pro Max",
    price: "₹1,29,999",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
    description:
      "The iPhone 15 Pro Max features the powerful A17 Pro chip, a 48MP camera system, titanium design, and an all-day battery life. Perfect for photography, gaming, and productivity.",
    category: "Mobiles",
    location: "Ludhiana, Punjab",
    seller: "Rahul Sharma",
    rating: 4.8,
  };

  return (
    <div className="product-page">
      <div className="product-container">

        {/* Product Image */}
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        {/* Product Details */}
        <div className="product-details">

          <span className="category">{product.category}</span>

          <h1>{product.title}</h1>

          <h2>{product.price}</h2>

          <p className="rating">⭐ {product.rating} / 5</p>

          <p className="location">📍 {product.location}</p>

          <h3>Description</h3>

          <p className="description">
            {product.description}
          </p>

          <div className="seller-box">
            <h4>Seller Information</h4>
            <p><strong>Name:</strong> {product.seller}</p>
            <p><strong>Location:</strong> {product.location}</p>
          </div>

          <div className="buttons">

            <button className="cart-btn">
              Add to Cart
            </button>

            <button className="wishlist-btn">
              ❤ Wishlist
            </button>

            <button className="contact-btn">
              Contact Seller
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails;