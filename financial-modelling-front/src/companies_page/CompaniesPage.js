import React, { useState } from "react";
import "./CompaniesPage.css";
import CompanyDetails from "./CompanyDetails";

const CompaniesPage = () => {
  const companies = [
    {
      id: 1,
      generalInfo: {
        companyName: "Tech Corp",
        countryOfExchange: "USA",
        countryOfHeadquarters: "USA",
        trbcIndustryGroup: "Technology",
        cfTemplate: "Template 1",
        consolidationBasis: "Full",
        scaling: "Large",
        period: "Annual",
        exportDate: "2024-12-01T00:00:00Z",
        growth: "%15",
        sector: "Finance",
      },
      financialData: [
        {
          date: "2020-01-01",
          revenueFromGoodsServices: 5000,
          asd: 500,
          grossProfitIndustrials: 2000,
        },
        {
          date: "2021-01-01",
          revenueFromGoodsServices: 5500,
          asd: 550,
          grossProfitIndustrials: 2500,
        },
      ],
    },
    {
      id: 2,
      generalInfo: {
        companyName: "Finance Inc.",
        countryOfExchange: "UK",
        countryOfHeadquarters: "UK",
        trbcIndustryGroup: "Finance",
        cfTemplate: "Template 2",
        consolidationBasis: "Partial",
        scaling: "Medium",
        period: "Quarterly",
        exportDate: "2024-11-01T00:00:00Z",
        growth: "%7",
        sector: "Automobile",
      },
      financialData: [
        {
          date: "2020-01-01",
          revenueFromGoodsServices: 3000,
          asd: 300,
          grossProfitIndustrials: 1500,
        },
        {
          date: "2021-01-01",
          revenueFromGoodsServices: 3200,
          asd: 350,
          grossProfitIndustrials: 1600,
        },
      ],
    },
  ];

  const sectors = Array.from(
    new Set(companies.map((company) => company.generalInfo.sector))
  );

  const [selectedSector, setSelectedSector] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSectorChange = (event) => {
    const sector = event.target.value;
    setSelectedSector(sector);
    setSearchTerm(""); // Reset search term when sector changes
  };

  const filteredCompanies = companies.filter((company) => {
    return (
      (!selectedSector || company.generalInfo.sector === selectedSector) &&
      company.generalInfo.companyName
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  });

  const handleShowDetails = (company) => {
    setSelectedCompany(company);
  };

  const handleCloseDetails = () => {
    setSelectedCompany(null);
  };

  return (
    <div className="companies-page-container">
      <div>
        <label htmlFor="sector-select">Select Company Sector:</label>
        <select id="sector-select" onChange={handleSectorChange}>
          <option value="">--Select Company Sector To See Companies--</option>
          {sectors.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>
      </div>

      {selectedSector && (
        <input
          type="text"
          placeholder="Search companies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      )}

      {filteredCompanies.length > 0 && selectedSector && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Revenue</th>
                <th>Gross Profit</th>
                <th>Company Quarter Growth</th>
                <th>Sector</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCompanies.map((company, index) => (
                <tr key={index}>
                  <td>{company.generalInfo.companyName}</td>
                  <td>
                    {
                      company.financialData.at(
                        company.financialData.lastIndexOf
                      ).revenueFromGoodsServices
                    }
                  </td>
                  <td>
                    {
                      company.financialData.at(
                        company.financialData.lastIndexOf
                      ).grossProfitIndustrials
                    }
                  </td>
                  <td>{company.generalInfo.growth}</td>
                  <td>{company.generalInfo.sector}</td>
                  <td>
                    <button onClick={() => handleShowDetails(company)}>
                      Show Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedCompany && (
            <CompanyDetails
              company={selectedCompany}
              onClose={handleCloseDetails}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CompaniesPage;
