import React from "react";
import "./Categories.css";

const categories = [
  {
    id: 1,
    icon: "📱",
    title: "Mobiles",
    description: "Smartphones, tablets & accessories",
  },
  {
    id: 2,
    icon: "💻",
    title: "Electronics",
    description: "Laptops, TVs, cameras & gadgets",
  },
  {
    id: 3,
    icon: "🚗",
    title: "Cars",
    description: "New & used cars for every budget",
  },
  {
    id: 4,
    icon: "🏍️",
    title: "Bikes",
    description: "Motorcycles, scooters & bicycles",
  },
  {
    id: 5,
    icon: "🛋️",
    title: "Furniture",
    description: "Home & office furniture",
  },
  {
    id: 6,
    icon: "👕",
    title: "Fashion",
    description: "Clothing, shoes & accessories",
  },
  {
    id: 7,
    icon: "🏠",
    title: "Property",
    description: "Buy, rent & sell properties",
  },
  {
    id: 8,
    icon: "🐶",
    title: "Pets",
    description: "Pets & pet accessories",
  },
  {
    id: 9,
    icon: "📚",
    title: "Books",
    description: "Books & educational materials",
  },
  {
    id: 10,
    icon: "🎮",
    title: "Gaming",
    description: "Consoles, games & accessories",
  },
  {
    id: 11,
    icon: "⌚",
    title: "Watches",
    description: "Luxury & smart watches",
  },
  {
    id: 12,
    icon: "🏋️",
    title: "Sports",
    description: "Fitness & sports equipment",
  },
];

function Categories() {
  return (
    <div className="categories-page">
      <div className="categories-header">
        <h1>Browse Categories</h1>
        <p>Discover products across all categories.</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <div className="category-box" key={category.id}>
            <div className="category-icon">{category.icon}</div>

            <h3>{category.title}</h3>

            <p>{category.description}</p>

            <button>Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;