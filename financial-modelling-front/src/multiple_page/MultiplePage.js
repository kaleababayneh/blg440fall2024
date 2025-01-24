import React from "react";
import { useNavigate } from "react-router-dom";
import "./MultiplePage.css";

const MultiplePage = () => {
  const navigate = useNavigate();

  return (
    <div className="multiple-page-container">
      {/* Upload Section */}
      <div className="card" onClick={() => navigate("/upload")}>
        <h1>Upload</h1>
        <p>Upload your files to get started with our powerful tools.</p>
        <button>Go to Excel Upload</button>
      </div>

      {/* Add Manually Section */}
      <div className="card" onClick={() => navigate("/add-manually")}>
        <h1>Add Manually</h1>
        <p>Add your data manually for a customized experience.</p>
        <button>Go to Add Manually</button>
      </div>
    </div>
  );
};

export default MultiplePage;
