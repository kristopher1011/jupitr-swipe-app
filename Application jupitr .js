import React, { useState } from "react";

const deals = [
  { id: 1, title: "Beach Escape in Bali", category: "Travel", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60" },
  { id: 2, title: "Mindfulness Retreat UK", category: "Wellness", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60" },
  { id: 3, title: "City Break in Paris", category: "Travel", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60" },
  { id: 4, title: "Yoga & Wellness Spain", category: "Wellness", image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60" },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [wishlist, setWishlist] = useState([]);

  if (index >= deals.length) {
    return (
      <div style={{ maxWidth: 400, margin: "auto", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
        <h2>Your Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>You didn’t save any deals.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {wishlist.map((deal) => (
              <li key={deal.id} style={{ marginBottom: 10 }}>
                <strong>{deal.title}</strong> ({deal.category})
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={() => {
            setIndex(0);
            setWishlist([]);
          }}
          style={{
            padding: "10px 20px",
            fontSize: 16,
            cursor: "pointer",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: 5,
          }}
        >
          Restart
        </button>
      </div>
    );
  }

  const currentDeal = deals[index];

  const swipeRight = () => {
    setWishlist([...wishlist, currentDeal]);
    setIndex(index + 1);
  };

  const swipeLeft = () => {
    setIndex(index + 1);
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        padding: 20,
      }}
    >
      <h1>Jupitr Swipe Deals</h1>
      <img
        src={currentDeal.image}
        alt={currentDeal.title}
        style={{ width: "100%", height: 250, objectFit: "cover", borderRadius: 10 }}
      />
      <h3>{currentDeal.title}</h3>
      <p>Category: {currentDeal.category}</p>
      <div>
        <button
          onClick={swipeLeft}
          style={{
            marginRight: 20,
            padding: "10px 30px",
            fontSize: 16,
            cursor: "pointer",
            backgroundColor: "#ccc",
            border: "none",
            borderRadius: 5,
          }}
        >
          Skip
        </button>
        <button
          onClick={swipeRight}
          style={{
            padding: "10px 30px",
            fontSize: 16,
            cursor: "pointer",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: 5,
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}