const fs = require("fs");
let html = fs.readFileSync("contact.html", "utf8");

// Fix form spacing
html = html.replace(/<form id="contact-form" novalidate class="space-y-6"/, 
                    `<form id="contact-form" novalidate class="space-y-4"`);

// Fix input padding
html = html.replace(/px-5 py-4/g, "px-4 py-3");

// Fix submit button padding
html = html.replace(/py-4 px-10 rounded-full/g, "py-3 px-10 rounded-full");

fs.writeFileSync("contact.html", html);

