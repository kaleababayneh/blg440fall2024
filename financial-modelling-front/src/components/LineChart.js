import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { year: "2014", Disputed: 20, Average: 30 },
  { year: "2015", Disputed: 25, Average: 40 },
  { year: "2016", Disputed: 30, Average: 50 },
  { year: "2017", Disputed: 50, Average: 60 },
  { year: "2018", Disputed: 70, Average: 80 },
  { year: "2019", Disputed: 90, Average: 100 },
  { year: "2020", Disputed: 110, Average: 120 },
];

const DisputedLineChart = () => {
  return (
    <LineChart width={400} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Disputed" stroke="#4A90E2" />
      <Line type="monotone" dataKey="Average" stroke="#B39DDB" />
    </LineChart>
  );
};

export default DisputedLineChart;
