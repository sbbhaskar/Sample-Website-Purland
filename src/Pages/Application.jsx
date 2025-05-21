import { useState } from "react";

const Application = () => {
  const [formData, setFormData] = useState({
    vat_certificate: "",
    vat_number: "",
    eori_number: "",
    company_use: "",
    business_history: "",
    alcohol_trade: "",
    current_customers: "",
    current_suppliers: "",
    diligence: "",
    clients_abroad: "",
    export_country: "",
    consolidation_purposes: "",
    clarification_bonds: "",
    compliance_issues: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted."); // 🔔 Dummy submit for now
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8 underline">
          PHL Application Form
        </h2>

        {[
          ["Your Company VAT Certificate/ Number / EORI Number", "vat_certificate"],
          ["The local VAT number of the country being despatched to", "vat_number"],
          ["The local EORI number of the country being despatched to", "eori_number"],
          ["Details on how your Company intend to use the bonded facility", "company_use"],
          ["Details of Directors & business history", "business_history"],
          ["Director confirmation of their history regarding any involvement in the Alcohol Trade", "alcohol_trade"],
          ["Please provide the list of current customers", "current_customers"],
          ["Please provide the list of current suppliers", "current_suppliers"],
          ["Details of how you undertake due diligence on your customers and suppliers", "diligence"],
          ["For any of your clients abroad we require the VAT and EORI number", "clients_abroad"],
          ["Are you looking to Export? If yes which country, which bond and which stock?", "export_country"],
          ["If your clients are looking to export/move to other bonds in EU (consolidation only)", "consolidation_purposes"],
          ["PHL will seek clarification for any bonds your customers hold accounts with", "clarification_bonds"],
          ["Can you confirm there are no compliance issues with HMRC?", "compliance_issues"],
        ].map(([label, name]) => (
          <div key={name}>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              {label} <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name={name}
              required
              value={formData[name] || ""}
              onChange={handleChange}
              className="h-16 px-4 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 text-base"
            />
          </div>
        ))}

        <div className="text-sm text-gray-600 italic mt-4">
          Please note: PHL must get HMRC approval to act as duty representative.
          Your answers may raise follow-up questions.
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Application;
