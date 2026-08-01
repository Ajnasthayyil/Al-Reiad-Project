const fs = require("fs");

const services = [
  "New Residency Visa", "Renew Residency Visa", "Cancel Residency Visa",
  "Golden Visa Nomination", "Golden Visa Full Process", "Transfer Visa To New Passport",
  "Data Modification", "New Born Visa", "Dependents On Hold",
  "New Business Consultancy", "Renew Trade License", "Amend Trade License",
  "Cancel Trade License",
  "Absconding Report",
  "UAE Tourist Visa", "Saudi Arabia Visa",
  "Pay Traffic Fines", "Traffic Fines Discount", "Mawaqif Residential Permit",
  "Vehicle Insurance", "Vehicle Registration Renewal", "Black Points Transfer",
  "International Driving License", "Vehicle Ownership Transfer", "Driving License Renewal",
  "Passport Size Photos", "Emirates ID Application Photos", "Foreign Country Visa Size Photos",
  "Frame Works", "Photocopies And PDF Services", "Lamination Services", "Photo Album",
  "Watch Services", "Car Keys And Batteries", "Curriculum Vitae"
];

let dataObj = {};

services.forEach(s => {
    const slug = s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    dataObj[slug] = {
        title: s,
        description: `Professional and efficient processing for your ${s}. We ensure all requirements are met and handle the end-to-end process to save you time and effort.`,
        documents: [
            "Valid Passport Copy",
            "Emirates ID (if applicable)",
            "Recent Passport Size Photograph"
        ],
        steps: [
            "Submit required documents for review.",
            "Make the necessary payments.",
            "Our typing experts will process your application.",
            "Receive your final documents/approvals."
        ],
        points: [
            "Ensure all documents are clear and valid.",
            "Processing times may vary depending on government approvals.",
            "Fees are subject to change based on official updates."
        ]
    };
});

const content = `const serviceData = ${JSON.stringify(dataObj, null, 4)};`;
fs.writeFileSync("service-data.js", content);

