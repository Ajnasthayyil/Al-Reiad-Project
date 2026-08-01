const fs = require("fs");
let content = fs.readFileSync("service-details.html", "utf8");

// Change grid gap from gap-12 to gap-16
content = content.replace(`class="grid lg:grid-cols-3 gap-12"`, `class="grid lg:grid-cols-3 gap-16"`);

// Improve accordions (border-l-4 gold)
content = content.replace(/class="border border-gray-200 rounded-xl overflow-hidden"/g, `class="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#c89f45]"`);
content = content.replace(/class="w-full px-6 py-4 flex items-center justify-between bg-\[#f8f9fa\] hover:bg-gray-100 transition-colors"/g, `class="w-full px-6 py-5 flex items-center justify-between bg-[#f8f9fa] hover:bg-white transition-colors"`);

// Change Quick Enquiry banner to Gold Gradient
content = content.replace(/<div class="bg-\[#111111\] text-white text-center py-4 rounded-xl mb-8 shadow-md">/g, `<div class="bg-gradient-to-r from-[#c89f45] to-[#dfbb68] text-white text-center py-5 rounded-xl mb-8 shadow-md">`);

// Make form fields stacked instead of grid-cols-2 for better space
content = content.replace(/<div class="grid grid-cols-2 gap-4">/g, `<div class="grid grid-cols-1 gap-5">`);

fs.writeFileSync("service-details.html", content);

