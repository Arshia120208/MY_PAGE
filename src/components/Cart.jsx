/* Cart.jsx */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 89999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 2,
      name: "Gaming Laptop",
      price: 74999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-header-section">
        <h1>Your Shopping Cart</h1>
        <p>Review items before proceeding to secure checkout.</p>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <h2>Your cart is empty</h2>
              <p>Explore our marketplace and discover great products!</p>
              <Link to="/categories" className="explore-shop-btn">
                Start Shopping
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <div className="cart-img-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <h2 className="item-price">₹{item.price.toLocaleString()}</h2>

                  <div className="cart-actions-row">
                    <div className="quantity">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal ({cartItems.length} items)</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>

            <div className="summary-row">
              <span>Estimated Delivery</span>
              <span className="free-delivery">FREE</span>
            </div>

            <div className="summary-row total">
              <span>Total Amount</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>

            <button 
              className="checkout-btn"
              onClick={() => alert("Redirecting to secure checkout gateway...")}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;