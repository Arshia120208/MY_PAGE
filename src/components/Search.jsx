import React, { useState } from "react";
import "./Search.css";

const products = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    category: "Mobiles",
    price: "₹89,999",
    location: "Ludhiana",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
  {
    id: 2,
    title: "Gaming Laptop",
    category: "Electronics",
    price: "₹74,999",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },
  {
    id: 3,
    title: "Royal Enfield Classic",
    category: "Bikes",
    price: "₹1,45,000",
    location: "Chandigarh",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500",
  },
  {
    id: 4,
    title: "Canon DSLR Camera",
    category: "Electronics",
    price: "₹42,000",
    location: "Amritsar",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
  },
  {
    id: 5,
    title: "Wooden Sofa Set",
    category: "Furniture",
    price: "₹18,000",
    location: "Jalandhar",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500",
  },
  {
    id: 6,
    title: "Nike Running Shoes",
    category: "Fashion",
    price: "₹4,999",
    location: "Patiala",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
];

function Search() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="search-page">

      <div className="search-header">
        <h1>Search Products</h1>

        <div className="search-controls">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Mobiles</option>
            <option>Electronics</option>
            <option>Bikes</option>
            <option>Furniture</option>
            <option>Fashion</option>
          </select>

        </div>
      </div>

      <div className="search-grid">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="search-card" key={item.id}>

              <img src={item.image} alt={item.title} />

              <div className="search-info">

                <h3>{item.title}</h3>

                <p className="price">{item.price}</p>

                <p>{item.category}</p>

                <p>{item.location}</p>

                <button>View Details</button>

              </div>

            </div>
          ))
        ) : (
          <h2 className="no-result">No Products Found 😔</h2>
        )}

      </div>

    </div>
  );
}

export default Search;