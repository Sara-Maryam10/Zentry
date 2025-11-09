import React, { useState, useEffect } from "react";
import "../App.css";

const mockMarketAssets = [
  {
    id: 101,
    name: "Oceanfront Villa",
    type: "Real Estate",
    owner: "Alice",
    price: 500000,
    currency: "USD",
    status: "For Sale"
  },
  {
    id: 102,
    name: "Luxury Car A1",
    type: "Vehicle",
    owner: "Bob",
    price: 85000,
    currency: "USD",
    status: "Sold"
  },
  {
    id: 103,
    name: "Crypto Art #2024",
    type: "Digital Asset",
    owner: "Alice",
    price: 1200,
    currency: "USD",
    status: "For Sale"
  }
];

function Marketplace() {
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [sortBy, setSortBy] = useState("newest"); // or price, popular

  useEffect(() => {
    // Simulate API fetch delay
    setTimeout(() => {
      setAssets(mockMarketAssets);
    }, 500);
  }, []);

  // Filter & Sort logic (basic)
  const filteredAssets = assets
    .filter(asset => asset.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterType === "" || asset.type === filterType))
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "newest") return b.id - a.id; // mock by id newest first
      // add other sorting logic as needed
      return 0;
    });

  return (
    <div className="marketplace-container">
      <h2>Marketplace</h2>

      <div className="market-controls">
        <input
          type="text"
          placeholder="Search assets..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={filterType} onChange={e => setFilterType(e.target.value)}>
          <option value="">All Types</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Digital Asset">Digital Asset</option>
        </select>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="price">Price</option>
        </select>
      </div>

      <div className="assets-grid">
        {filteredAssets.length === 0 && <p>No assets found.</p>}

        {filteredAssets.map(asset => (
          <div key={asset.id} className="market-asset-card">
            <h3>{asset.name}</h3>
            <p>Type: {asset.type}</p>
            <p>Owner: {asset.owner}</p>
            <p>Price: {asset.price} {asset.currency}</p>
            <p>Status: <span>{asset.status}</span></p>
            {asset.status === "For Sale" ? (
              <button className="buy-button">Buy Now</button>
            ) : (
              <button className="sold-button" disabled>Sold</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
