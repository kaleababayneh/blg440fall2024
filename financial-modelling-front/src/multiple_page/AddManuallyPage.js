import React from "react";
import "./AddManuallyPage.css";

const AddManuallyPage = () => {
  return (
    <div className="manual-input-page">
      <h1>Manual Data Input</h1>
      <form className="manual-input-form">
        {/* General Information Section */}
        <section>
          <h2>General Information</h2>
          <div className="form-grid">
            <div>
              <label>Company Name</label>
              <input type="text" placeholder="Enter company name" />
            </div>
            <div>
              <label>Country of Exchange</label>
              <input type="text" placeholder="Enter country of exchange" />
            </div>
            <div>
              <label>Country of Headquarters</label>
              <input type="text" placeholder="Enter country of headquarters" />
            </div>
            <div>
              <label>TRBC Industry Group</label>
              <input type="text" placeholder="Enter industry group" />
            </div>
            <div>
              <label>CF Template</label>
              <input type="text" placeholder="Enter CF template" />
            </div>
            <div>
              <label>Consolidation Basis</label>
              <input type="text" placeholder="Enter consolidation basis" />
            </div>
            <div>
              <label>Scaling</label>
              <input type="text" placeholder="Enter scaling value" />
            </div>
            <div>
              <label>Period</label>
              <input type="text" placeholder="Enter period" />
            </div>
            <div>
              <label>Export Date</label>
              <input type="date" />
            </div>
          </div>
        </section>

        {/* Financial Data Section */}
        <section>
          <h2>Financial Data</h2>
          <div className="form-grid">
            <div>
              <label>Date</label>
              <input type="date" />
            </div>
            <div>
              <label>Standardized Currency</label>
              <input type="text" placeholder="Enter currency" />
            </div>
            <div>
              <label>Revenue from Goods & Services</label>
              <input type="text" placeholder="Enter revenue" />
            </div>
            <div>
              <label>Revenue from Business Activities - Total</label>
              <input type="text" placeholder="Enter total revenue" />
            </div>
            <div>
              <label>Cost of Operating Revenue</label>
              <input type="text" placeholder="Enter cost" />
            </div>
            <div>
              <label>Gross Profit</label>
              <input type="text" placeholder="Enter gross profit" />
            </div>
            <div>
              <label>Operating Expenses - Total</label>
              <input type="text" placeholder="Enter expenses" />
            </div>
            <div>
              <label>Operating Profit</label>
              <input type="text" placeholder="Enter profit" />
            </div>
            <div>
              <label>Income before Taxes</label>
              <input type="text" placeholder="Enter income" />
            </div>
            <div>
              <label>Net Income after Tax</label>
              <input type="text" placeholder="Enter net income" />
            </div>
            <div>
              <label>EBITDA</label>
              <input type="text" placeholder="Enter EBITDA" />
            </div>
          </div>
        </section>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddManuallyPage;
