import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./ScenarioAnalysis.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ScenarioAnalysis = () => {
  const [selectedScenario, setSelectedScenario] = useState("base");
  const [selectedModel, setSelectedModel] = useState("");
  const [analysisResult, setAnalysisResult] = useState("");

  // Define scenarios and variables
  const scenarios = {
    base: {
      description: "Base Scenario: Steady growth and minor risks.",
      variables: [
        { name: "Sales Growth Rate", value: 5 },
        { name: "COGS Growth Rate", value: 3 },
        { name: "Interest Rate", value: 4 },
        { name: "Market Demand", value: 50 },
        { name: "Exchange Rate (USD)", value: 1.0 },
      ],
      risk: "Market fluctuations may impact steady growth.",
      mitigation: "Diversify investments to balance risks.",
    },
    best: {
      description: "Best Scenario: Rapid growth and high returns.",
      variables: [
        { name: "Sales Growth Rate", value: 10 },
        { name: "COGS Growth Rate", value: 2 },
        { name: "Interest Rate", value: 3 },
        { name: "Market Demand", value: 70 },
        { name: "Exchange Rate (USD)", value: 0.95 },
      ],
      risk: "Overconfidence may lead to poor decision-making.",
      mitigation: "Implement strong governance and monitoring systems.",
    },
    worst: {
      description: "Worst Scenario: Significant losses and major risks.",
      variables: [
        { name: "Sales Growth Rate", value: 2 },
        { name: "COGS Growth Rate", value: 5 },
        { name: "Interest Rate", value: 6 },
        { name: "Market Demand", value: 30 },
        { name: "Exchange Rate (USD)", value: 1.05 },
      ],
      risk: "Severe economic downturn may harm profitability.",
      mitigation: "Reduce costs, prioritize essential projects.",
    },
    risk: {
      description: "Risk Scenario: Extreme market conditions and heavy losses.",
      variables: [
        { name: "Sales Growth Rate", value: 1 },
        { name: "COGS Growth Rate", value: 7 },
        { name: "Interest Rate", value: 8 },
        { name: "Market Demand", value: 10 },
        { name: "Exchange Rate (USD)", value: 1.1 },
      ],
      risk: "Extreme financial stress and potential bankruptcy.",
      mitigation:
        "Restructure debts, seek external funding, and reduce liabilities.",
    },
  };

  const models = ["ChatGPT", "GAN", "LLM", "VA"];

  // Handle scenario selection
  const handleScenarioChange = (e) => {
    setSelectedScenario(e.target.value);
    setAnalysisResult(""); // Clear previous analysis result
  };

  // Handle model selection and simulate analysis
  const analyzeWithModel = (model) => {
    setSelectedModel(model);
    const result = `Using ${model} for analyzing the ${selectedScenario} scenario. Detailed insights are being generated.`;
    setAnalysisResult(result);
  };

  // Simulate report generation
  const generateReport = () => {
    alert("Final report generated for " + selectedScenario + " scenario.");
  };

  // Generate histogram data dynamically
  const getChartData = () => {
    const scenario = scenarios[selectedScenario];
    const labels = scenario.variables.map((v) => v.name);
    const data = scenario.variables.map((v) => v.value);

    return {
      labels,
      datasets: [
        {
          label: `${
            selectedScenario.charAt(0).toUpperCase() + selectedScenario.slice(1)
          } Scenario`,
          data,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="scenario-analysis">
      <div className="scenario-header">
        <h1>Scenario Analysis</h1>
        <p>
          Explore various scenarios and assess their impact on business
          performance. Generate reports and identify risks and mitigation
          strategies.
        </p>
        <select
          className="scenario-select"
          value={selectedScenario}
          onChange={handleScenarioChange}
        >
          {Object.keys(scenarios).map((key) => (
            <option value={key} key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)} Scenario
            </option>
          ))}
        </select>
      </div>

      <div className="scenario-content">
        <div className="scenario-details card">
          <h2>
            {selectedScenario.charAt(0).toUpperCase() +
              selectedScenario.slice(1)}{" "}
            Scenario
          </h2>
          <p>{scenarios[selectedScenario].description}</p>

          <h3>Key Variables</h3>
          <table>
            <thead>
              <tr>
                <th>Variable</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {scenarios[selectedScenario].variables.map((variable, index) => (
                <tr key={index}>
                  <td>{variable.name}</td>
                  <td>{variable.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="scenario-chart card">
          <h3>Scenario Histogram</h3>
          <Bar data={getChartData()} />
        </div>
      </div>

      <div className="model-selection">
        <h3>Choose a Model for Analysis</h3>
        <div className="model-buttons">
          {models.map((model, index) => (
            <button
              key={index}
              className={`model-button ${
                selectedModel === model ? "selected" : ""
              }`}
              onClick={() => analyzeWithModel(model)}
            >
              {model}
            </button>
          ))}
        </div>
        {analysisResult && (
          <div className="analysis-result">
            <p>{analysisResult}</p>
          </div>
        )}
      </div>

      <div className="actions">
        <button className="generate-report-button" onClick={generateReport}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default ScenarioAnalysis;
