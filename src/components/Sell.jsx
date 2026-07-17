import React, { useState } from "react";
import "./Sell.css";

function Sell() {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    location: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setProduct({
      ...product,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(product);

    alert("Product Listed Successfully!");

    setProduct({
      title: "",
      category: "",
      price: "",
      location: "",
      description: "",
      image: null,
    });

    e.target.reset();
  };

  return (
    <div className="sell-page">
      <div className="sell-container">

        <h1>Sell Your Product</h1>
        <p>Fill in the details below to list your item.</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Product Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter product title"
              value={product.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Category</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option>Mobiles</option>
              <option>Electronics</option>
              <option>Cars</option>
              <option>Bikes</option>
              <option>Furniture</option>
              <option>Fashion</option>
              <option>Sports</option>
            </select>
          </div>

          <div className="input-group">
            <label>Price (₹)</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="City"
              value={product.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea
              name="description"
              rows="5"
              placeholder="Describe your product..."
              value={product.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Upload Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="sell-btn">
            Post Ad
          </button>

        </form>

      </div>
    </div>
  );
}

export default Sell;