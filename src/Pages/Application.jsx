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
          CT Application Form
        </h2>

        {[
          ["questions here, questions here, questions here, questions here"],
          ["questions here, questions here, questions here, questions here"],
          ["questions here, questions here, questions here, questions here"],
          ["questions here, questions here, questions here, questions here"],
          ["questions here, questions here, questions here, questions here"],
          ["questions here, questions here, questions here, questions here"],
          ["questions here, questions here, questions here, questions here"],
          ["questions here, questions here, questions here, questions here"],
          ["questions here, questions here, questions here, questions here"],
          ["questions here, questions here, questions here, questions here"],
          ["questions here, questions here, questions here, questions here"],
          ["questions here, questions here, questions here, questions here"],
          ["questions here, questions here, questions here, questions here"],
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
          Please note: CT LLP.
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
