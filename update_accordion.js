const fs = require("fs");

// 1. Remove border-l-4 from service-details.html
let html = fs.readFileSync("service-details.html", "utf8");
html = html.replace(/border-l-4 border-l-\[#c89f45\]/g, "");
// clean up double spaces if any
html = html.replace(/  +/g, " ");
fs.writeFileSync("service-details.html", html);

// 2. Update service-data.js
let js = fs.readFileSync("service-data.js", "utf8");
// The documents array currently looks like:
//         "documents": [
//             "Valid Passport Copy",
//             "Emirates ID (if applicable)",
//             "Recent Passport Size Photograph"
//         ],
// I will just use regex to replace all documents arrays with the new one
js = js.replace(/"documents": \[\s*"Valid Passport Copy",\s*"Emirates ID \(if applicable\)",\s*"Recent Passport Size Photograph"\s*\]/g, `"documents": [\n            "The specific document requirements will be provided by our responsible expert upon consultation."\n        ]`);
fs.writeFileSync("service-data.js", js);

