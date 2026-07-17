import React, { useState } from "react";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 89999,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 2,
      name: "Gaming Laptop",
      price: 74999,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
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
      <h1>Shopping Cart</h1>

      <div className="cart-container">

        <div className="cart-items">

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <h2>Your cart is empty 🛒</h2>
              <p>Add some products to continue shopping.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-card" key={item.id}>

                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <h2>₹{item.price.toLocaleString()}</h2>

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
            ))
          )}

        </div>

        <div className="summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>₹99</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>₹{(subtotal + 99).toLocaleString()}</span>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>

        </div>

      </div>
    </div>
  );
}

export default Cart;