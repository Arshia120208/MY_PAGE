import React from "react";
import "./Home.css";

const products = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    price: "₹89,999",
    location: "Ludhiana",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
  {
    id: 2,
    title: "Gaming Laptop",
    price: "₹74,999",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },
  {
    id: 3,
    title: "Royal Enfield",
    price: "₹1,45,000",
    location: "Chandigarh",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500",
  },
  {
    id: 4,
    title: "Sony Camera",
    price: "₹42,000",
    location: "Amritsar",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
  },
];

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Buy & Sell Anything</h1>
          <p>
            Find the best deals near you. Shop electronics, vehicles,
            furniture, fashion, and much more.
          </p>

          <button>Explore Products</button>
        </div>
      </section>

      {/* Categories */}

      <section className="categories">

        <h2>Popular Categories</h2>

        <div className="category-container">

          <div className="category-card">📱<span>Mobiles</span></div>

          <div className="category-card">🚗<span>Cars</span></div>

          <div className="category-card">🏍️<span>Bikes</span></div>

          <div className="category-card">💻<span>Electronics</span></div>

          <div className="category-card">🛋️<span>Furniture</span></div>

          <div className="category-card">👕<span>Fashion</span></div>

        </div>

      </section>

      {/* Latest Products */}

      <section className="products">

        <h2>Latest Products</h2>

        <div className="product-grid">

          {products.map((item) => (
            <div className="product-card" key={item.id}>

              <img src={item.image} alt={item.title} />

              <div className="product-info">

                <h3>{item.title}</h3>

                <h2>{item.price}</h2>

                <p>{item.location}</p>

                <button>View Details</button>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;