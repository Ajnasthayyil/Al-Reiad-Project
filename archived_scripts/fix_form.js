const fs = require("fs");
let html = fs.readFileSync("service-details.html", "utf8");

// Fix form container padding
html = html.replace(/<div class="bg-\[#f8f9fa\] p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-sm">/, 
                    `<div class="bg-[#f8f9fa] p-6 rounded-2xl border border-gray-200 shadow-sm">`);

// Fix form spacing
html = html.replace(/<form id="contact-form" novalidate class="space-y-6"/, 
                    `<form id="contact-form" novalidate class="space-y-4"`);

// Fix input padding
html = html.replace(/px-5 py-4/g, "px-4 py-3");

// Fix submit button padding
html = html.replace(/py-4 rounded-full/g, "py-3 rounded-full");

fs.writeFileSync("service-details.html", html);

