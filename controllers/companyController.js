const mongoose = require('mongoose');

const financialDataSchema = new mongoose.Schema({
  _id: String,
  general_info: Object,
  financial_data: Object,
});

const Company = mongoose.model('test6', financialDataSchema);

console.log(Company)

function cleanString(input) {
  return input
    .replace(/\s+/g, '') // Remove spaces
    .replace(/\s*\(.*?\)$/, ''); // Remove parentheses and their content
}

exports.getCompanyData = async (req, res) => {
  const companyName = req.params.companyName; 
  const dateIndex = req.query.Date; 

  try {
    const company = await Company.findById(companyName);

    if (!company) {
      return res.status(404).send('Company not found');
    }

    const financialData = company.financial_data;
    const dateMapping = Object.keys(financialData).map((key) => financialData[key].Date);

    const availableDates = dateMapping;

    const selectedDateIndex = dateIndex || '0';
    const selectedDate = availableDates[selectedDateIndex];

    const financialDataForDate = financialData[selectedDateIndex];

    if (!financialDataForDate) {
      return res.status(404).send('Data not found for the specified date');
    }

    res.render('company', {
      companyName: companyName,
      generalInfo: company.general_info,
      financialData: financialDataForDate,
      availableDates: availableDates, 
      selectedDate: selectedDate,    
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
