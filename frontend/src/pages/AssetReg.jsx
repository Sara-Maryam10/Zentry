import React, { useState } from "react";
import "../App.css";

function AssetReg() {
  const [formData, setFormData] = useState({
    ownerName: "",
    contact: "",
    email: "",
    assetType: "",
    assetName: "",
    description: "",
    assetFile: null,
    regDate: new Date().toISOString().slice(0, 10),
    notes: ""
  });

  const assetTypes = [
    "Real Estate",
    "Vehicle",
    "Digital Asset",
    "Artwork",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "assetFile") {
      setFormData({ ...formData, assetFile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Asset registration data:", formData);
    // Here you can add API call or further processing
    alert("Asset registration submitted!");
  };

  return (
    <div className="asset-reg-container">
      <h2>Asset Registration</h2>
      <form onSubmit={handleSubmit} className="asset-reg-form">

        <label>
          Owner Name:
          <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} required />
        </label>

        <label>
          Contact Number:
          <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Asset Type:
          <select name="assetType" value={formData.assetType} onChange={handleChange} required>
            <option value="">Select type</option>
            {assetTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>

        <label>
          Asset Name/Title:
          <input type="text" name="assetName" value={formData.assetName} onChange={handleChange} required />
        </label>

        <label>
          Asset Description:
          <textarea name="description" value={formData.description} onChange={handleChange} rows="3" />
        </label>

        <label>
          Upload Asset File:
          <input type="file" name="assetFile" onChange={handleChange} />
          {formData.assetFile && <p>Selected: {formData.assetFile.name}</p>}
        </label>

        <label>
          Registration Date:
          <input type="date" name="regDate" value={formData.regDate} onChange={handleChange} required />
        </label>

        <label>
          Additional Notes:
          <textarea name="notes" value={formData.notes} onChange={handleChange} rows="2" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AssetReg;
