import React from "react";
import "./Dashboard.css";
import chartImage from "../photos/chart.svg";

const Dashboard = ({ goToMainPage }) => {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>Financial Dashboard</h1>
        <p>Get insights into your financial data at a glance.</p>
      </header>

      <div className="summary-cards">
        <div className="card">
          <h3>Total Revenue</h3>
          <p>$120,000</p>
        </div>
        <div className="card">
          <h3>Total Expenses</h3>
          <p>$80,000</p>
        </div>
        <div className="card">
          <h3>Net Profit</h3>
          <p>$40,000</p>
        </div>
        <div className="card">
          <h3>Cash Flow</h3>
          <p>$10,000</p>
        </div>
      </div>

      <div className="charts-section">
        <h2>Financial Analytics</h2>
        <div className="full-width-chart-container">
          <img
            src={chartImage}
            alt="Financial Chart"
            className="full-width-chart"
          />
        </div>
      </div>
      <div className="recent-transactions">
        <h2>Recent Transactions</h2>
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-11-10</td>
              <td>Marketing Expenses</td>
              <td>$5,000</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>2024-11-08</td>
              <td>Client Payment</td>
              <td>$15,000</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>2024-11-05</td>
              <td>Office Supplies</td>
              <td>$1,200</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="back-btn" onClick={goToMainPage}>
        Back to Main Page
      </button>
    </div>
  );
};

export default Dashboard;
