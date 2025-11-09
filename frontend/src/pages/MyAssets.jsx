import React, { useEffect, useState } from "react";
import "../App.css";

const mockAssets = [
  {
    id: 1,
    name: "Asset 001",
    type: "Real Estate",
    owner: "Alice",
    registeredOn: "2025-10-01",
    status: "Verified",
  },
  {
    id: 2,
    name: "Vehicle A23",
    type: "Vehicle",
    owner: "Bob",
    registeredOn: "2025-09-18",
    status: "Pending",
  },
  {
    id: 3,
    name: "Digital Artwork #54",
    type: "Digital Asset",
    owner: "Alice",
    registeredOn: "2025-08-27",
    status: "Verified",
  },
];

function MyAssets() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    // Simulate API fetch delay
    setTimeout(() => {
      setAssets(mockAssets);
    }, 500);
  }, []);

  return (
    <div className="assets-container">
      <h2>My Registered Assets</h2>
      {assets.length === 0 ? (
        <p>Loading assets...</p>
      ) : (
        <div className="assets-grid">
          {assets.map((asset) => (
            <div key={asset.id} className={`asset-card status-${asset.status.toLowerCase()}`}>
              <h3>{asset.name}</h3>
              <p>Type: {asset.type}</p>
              <p>Owner: {asset.owner}</p>
              <p>Registered: {asset.registeredOn}</p>
              <p>Status: <span>{asset.status}</span></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyAssets;
