import React from "react";
import "./Dashboard.css";
import DashboardCard from "../components/Card";
import CustomBarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnetChart";
import DisputedLineChart from "../components/LineChart";
import FulledPieChart from "../components/FilledPieChart";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="card-row">
        <DashboardCard
          title="Total Income"
          value={579000}
          savedPercentage={25}
          bgColor="#3498db"
        />
        <DashboardCard
          title="Total Expenses"
          value={79000}
          savedPercentage={25}
          bgColor="#1abc9c"
        />
        <DashboardCard
          title="Cash on Hand"
          value={92000}
          savedPercentage={25}
          bgColor="#9b59b6"
        />
        <DashboardCard
          title="Net Profit Margin"
          value={179000}
          savedPercentage={65}
          bgColor="#2ecc71"
        />
      </div>

      <div className="chart-row">
        <div className="chart-container">
          <h4>AP and AR Balance</h4>
          <CustomBarChart />
        </div>
        <div className="chart-container">
          <h4>% of Income Budget</h4>
          <DoughnutChart />
        </div>
      </div>
      <div className="chart-row">
        <div className="chart-container">
          <h4>Disputed Invoices</h4>
          <DisputedLineChart />
        </div>
        <div className="chart-container">
          <h4>Disputed vs Overdue Invoices</h4>
          <FulledPieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
