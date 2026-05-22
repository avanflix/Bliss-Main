'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'price' | 'payment'>('price');
  const [monthlyIncome, setMonthlyIncome] = useState(2000000);
  const [loanTenure, setLoanTenure] = useState(1);
  const [interestRate, setInterestRate] = useState(8);
  const [calculatedLoan, setCalculatedLoan] = useState<number | null>(null);

  const priceParticulars = [
    { label: 'Basic Price', value: '₹5,699', unit: 'per sq.ft.' },
    { label: 'Floor Rise (8th Floor Onwards)', value: '₹10', unit: 'per sq.ft.' },
    { label: 'Corner Premium Charges', value: '₹60', unit: 'per sq.ft.' },
    { label: 'Club Facilities & Amenities Charges', value: '₹2,00,000', unit: 'per flat' },
    { label: 'Infrastructure Charges', value: '₹1,50,000', unit: 'per flat' },
    { label: '1 Car & 1 Bike Parking Charges', value: '₹1,75,000', unit: 'per flat' },
    { label: 'Documentation Charges', value: '₹25,000', unit: 'per flat' }
  ];

  const otherCharges = [
    { label: 'Facility Maintenance Charges (For First 2 years)', value: '₹85', unit: 'per sq.ft.' },
    { label: 'Corpus Fund', value: '₹50', unit: 'per sq.ft.' },
    { label: 'Move-in Charges', value: '₹25,000', unit: 'per flat' }
  ];

  const milestones = [
    { number: 1, description: 'Booking Advance', percentage: '10%' },
    { number: 2, description: 'Upon Completion of Excavation of Respective Tower', percentage: '5%' },
    { number: 3, description: 'Upon Casting of Footings of Respective Tower', percentage: '10%' },
    { number: 4, description: 'Upon Casting Ground Floor Slab of Respective Tower', percentage: '10%' },
    { number: 5, description: 'Upon Casting 5th Floor Slab of Respective Tower', percentage: '10%' },
    { number: 6, description: 'Upon Casting 10th Floor Slab of Respective Tower', percentage: '10%' },
    { number: 7, description: 'Upon Casting Terrace Floor Slab of Respective Tower', percentage: '10%' },
    { number: 8, description: 'Upon Completion of Brick Wall of Respective Unit', percentage: '10%' },
    { number: 9, description: 'Upon Completion of First Coat Putty of Respective Unit', percentage: '10%' },
    { number: 10, description: 'Upon Completion of Flooring of Respective Unit', percentage: '10%' },
    { number: 11, description: 'At the Time of Handover (or) Registration of the respective unit whichever is earlier', percentage: '5%' }
  ];

  const calculateLoan = () => {
    const maxEMI = monthlyIncome * 0.5; // FOIR = 50%
    const r = (interestRate / 100) / 12;
    const n = loanTenure * 12;
    
    let loanAmount;
    if (r === 0) {
      loanAmount = Math.floor(maxEMI * n);
    } else {
      const numerator = Math.pow(1 + r, n) - 1;
      const denominator = r * Math.pow(1 + r, n);
      loanAmount = Math.floor(maxEMI * (numerator / denominator));
    }
    
    setCalculatedLoan(loanAmount);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Tabs */}
      <section className="sticky top-10 z-40 bg-gray-100 py-4">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg px-4 py-4">
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setActiveTab('price')}
                className={`px-8 py-2.5 rounded-full font-normal transition-all duration-300 ${
                  activeTab === 'price'
                    ? 'bg-[#8b2727] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Price sheet
              </button>
              <button
                onClick={() => setActiveTab('payment')}
                className={`px-8 py-2.5 rounded-full font-normal transition-all duration-300 ${
                  activeTab === 'payment'
                    ? 'bg-[#8b2727] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Payment Structure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'price' ? (
            /* Price Sheet Tab */
            <div className="space-y-8">
              {/* Price Particulars */}
              <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 relative">
                {/* Download Button */}
                <button className="absolute top-6 right-6 bg-[#8b2727] text-white p-3 rounded-full hover:bg-[#6d1e1e] transition-colors shadow-lg">
                  <Download size={20} />
                </button>

                <h2 className="text-2xl sm:text-3xl font-medium text-[#1f2020] mb-6">
                  Price <span className="font-normal text-gray-700">Particulars</span>
                </h2>

                <div className="space-y-3">
                  {priceParticulars.map((item) => (
                    <div 
                      key={item.label}
                      className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                    >
                      <p className="text-gray-700 font-normal text-sm">{item.label}</p>
                      <div className="text-right">
                        <span className="text-[#1f2020] font-medium text-base">{item.value}</span>
                        <span className="text-gray-600 text-xs ml-2">{item.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Other Charges */}
                <h2 className="text-2xl sm:text-3xl font-medium text-[#1f2020] mt-10 mb-6">
                  Other <span className="font-normal text-gray-700">Charges</span>
                </h2>

                <div className="space-y-3">
                  {otherCharges.map((item) => (
                    <div 
                      key={item.label}
                      className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                    >
                      <p className="text-gray-700 font-normal text-sm">{item.label}</p>
                      <div className="text-right">
                        <span className="text-[#1f2020] font-medium text-base">{item.value}</span>
                        <span className="text-gray-600 text-xs ml-2">{item.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Loan Eligibility Calculator - Price Tab */}
              <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl font-medium text-[#1f2020] mb-6">
                  Check your <span className="font-normal text-gray-700">Loan Eligibility</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Side - Inputs */}
                  <div className="space-y-6">
                    {/* Monthly Income */}
                    <div>
                      <label htmlFor="monthly-income" className="block text-[#1f2020] font-normal text-sm mb-2">Monthly Income</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">₹</span>
                        <input
                          id="monthly-income"
                          type="number"
                          value={monthlyIncome}
                          onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                          className="w-full pl-8 pr-4 py-2.5 text-sm bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#8b2727]"
                        />
                      </div>
                    </div>

                    {/* Loan Tenure */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label htmlFor="loan-tenure" className="text-[#1f2020] font-normal text-sm">Loan Tenure (years)</label>
                        <input
                          id="loan-tenure"
                          type="number"
                          value={loanTenure}
                          onChange={(e) => setLoanTenure(Number(e.target.value))}
                          className="w-16 px-2 py-1.5 text-sm bg-gray-100 rounded-lg text-center border-none focus:outline-none focus:ring-2 focus:ring-[#8b2727]"
                        />
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="30"
                        value={loanTenure}
                        onChange={(e) => setLoanTenure(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8b2727]"
                      />
                      <div className="flex justify-between text-xs text-gray-600 mt-1">
                        <span>1</span>
                        <span>30</span>
                      </div>
                    </div>

                    {/* Interest Rate */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label htmlFor="interest-rate" className="text-[#1f2020] font-normal text-sm">Interest Rate (% P.A.)</label>
                        <input
                          id="interest-rate"
                          type="number"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-16 px-2 py-1.5 text-sm bg-gray-100 rounded-lg text-center border-none focus:outline-none focus:ring-2 focus:ring-[#8b2727]"
                        />
                      </div>
                      <input
                        type="range"
                        min="6"
                        max="10"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8b2727]"
                      />
                      <div className="flex justify-between text-xs text-gray-600 mt-1">
                        <span>6%</span>
                        <span>10%</span>
                      </div>
                    </div>

                    {/* Calculate Button */}
                    <button 
                      onClick={calculateLoan}
                      className="w-full bg-[#8b2727] text-white py-2.5 text-sm rounded-full font-normal hover:bg-[#6d1e1e] transition-colors"
                    >
                      Get Loan Eligibility
                    </button>
                  </div>

                  {/* Right Side - Result */}
                  <div className="flex items-center justify-center">
                    <div className="text-center bg-gray-50 rounded-2xl p-6 w-full">
                      <h3 className="text-[#1f2020] font-normal text-base mb-3">Eligible Loan Amount</h3>
                      {calculatedLoan === null ? (
                        <p className="text-gray-400 text-4xl font-semibold mb-3">₹ 0</p>
                      ) : (
                        <p className="text-[#8b2727] text-4xl font-semibold mb-3">₹ {calculatedLoan.toLocaleString('en-IN')}</p>
                      )}
                      <p className="text-gray-500 text-xs">
                        Note : This calculator gives you an estimate of your loan eligibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Payment Structure Tab */
            <div className="space-y-8">
              {/* Milestone Details */}
              <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 relative">
                {/* Download Button */}
                <button className="absolute top-6 right-6 bg-[#8b2727] text-white p-3 rounded-full hover:bg-[#6d1e1e] transition-colors shadow-lg">
                  <Download size={20} />
                </button>

                <h2 className="text-2xl sm:text-3xl font-medium text-[#1f2020] mb-8">
                  Milestone <span className="font-normal text-gray-700">Details</span>
                </h2>

                <div className="space-y-0">
                  {milestones.map((milestone, index) => (
                    <div 
                      key={milestone.number}
                      className="flex items-start gap-4 relative"
                    >
                      {/* Timeline Line */}
                      {index !== milestones.length - 1 && (
                        <div className="absolute left-[16px] top-[36px] w-0.5 h-full bg-[#8b2727]"></div>
                      )}
                      
                      {/* Number Circle */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8b2727] text-white flex items-center justify-center font-normal text-xs z-10">
                        {milestone.number}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-6 flex justify-between items-center">
                        <p className="text-gray-700 font-normal text-sm pr-4">{milestone.description}</p>
                        <span className="text-[#8b2727] font-medium text-base whitespace-nowrap">{milestone.percentage}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="mt-6 pt-4 border-t-2 border-gray-300 flex justify-between items-center">
                  <p className="text-[#1f2020] font-medium text-base">Total Payable Amount On or Before Registration</p>
                  <span className="text-[#8b2727] font-semibold text-xl">100%</span>
                </div>
              </div>

              {/* Loan Eligibility Calculator - Payment Tab */}
              <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl font-medium text-[#1f2020] mb-6">
                  Check your <span className="font-normal text-gray-700">Loan Eligibility</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Side - Inputs */}
                  <div className="space-y-6">
                    {/* Monthly Income */}
                    <div>
                      <label htmlFor="monthly-income" className="block text-[#1f2020] font-normal text-sm mb-2">Monthly Income</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">₹</span>
                        <input
                          id="monthly-income"
                          type="number"
                          value={monthlyIncome}
                          onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                          className="w-full pl-8 pr-4 py-2.5 text-sm bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#8b2727]"
                        />
                      </div>
                    </div>

                    {/* Loan Tenure */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label htmlFor="loan-tenure" className="text-[#1f2020] font-normal text-sm">Loan Tenure (years)</label>
                        <input
                          id="loan-tenure"
                          type="number"
                          value={loanTenure}
                          onChange={(e) => setLoanTenure(Number(e.target.value))}
                          className="w-16 px-2 py-1.5 text-sm bg-gray-100 rounded-lg text-center border-none focus:outline-none focus:ring-2 focus:ring-[#8b2727]"
                        />
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="30"
                        value={loanTenure}
                        onChange={(e) => setLoanTenure(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8b2727]"
                      />
                      <div className="flex justify-between text-xs text-gray-600 mt-1">
                        <span>1</span>
                        <span>30</span>
                      </div>
                    </div>

                    {/* Interest Rate */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label htmlFor="interest-rate" className="text-[#1f2020] font-normal text-sm">Interest Rate (% P.A.)</label>
                        <input
                          id="interest-rate"
                          type="number"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-16 px-2 py-1.5 text-sm bg-gray-100 rounded-lg text-center border-none focus:outline-none focus:ring-2 focus:ring-[#8b2727]"
                        />
                      </div>
                      <input
                        type="range"
                        min="6"
                        max="10"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8b2727]"
                      />
                      <div className="flex justify-between text-xs text-gray-600 mt-1">
                        <span>6%</span>
                        <span>10%</span>
                      </div>
                    </div>

                    {/* Calculate Button */}
                    <button 
                      onClick={calculateLoan}
                      className="w-full bg-[#8b2727] text-white py-2.5 text-sm rounded-full font-normal hover:bg-[#6d1e1e] transition-colors"
                    >
                      Get Loan Eligibility
                    </button>
                  </div>

                  {/* Right Side - Result */}
                  <div className="flex items-center justify-center">
                    <div className="text-center bg-gray-50 rounded-2xl p-6 w-full">
                      <h3 className="text-[#1f2020] font-normal text-base mb-3">Eligible Loan Amount</h3>
                      {calculatedLoan === null ? (
                        <p className="text-gray-400 text-4xl font-semibold mb-3">₹ 0</p>
                      ) : (
                        <p className="text-[#8b2727] text-4xl font-semibold mb-3">₹ {calculatedLoan.toLocaleString('en-IN')}</p>
                      )}
                      <p className="text-gray-500 text-xs">
                        Note : This calculator gives you an estimate of your loan eligibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

