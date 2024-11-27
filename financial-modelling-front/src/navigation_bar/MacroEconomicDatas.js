import React from "react";
import Marquee from "react-fast-marquee";
import "./MacroEconomicDatas.css";

const MacroEconomicDatas = () => {
  const financialData = [
    { name: "Stock A", price: "$120" },
    { name: "Stock B", price: "$80" },
    { name: "Stock C", price: "$200" },
    { name: "Stock D", price: "$150" },
  ];

  return (
    <div className="marquee-container">
      <Marquee gradient={false} speed={50}>
        {financialData.map((item, index) => (
          <div key={index} className="marquee-item">
            <span className="stock-name">{item.name}</span>:
            <span className="stock-price">{item.price}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MacroEconomicDatas;
