const fs = require("fs");
let html = fs.readFileSync("service-details.html", "utf8");

// Change the outer grid to a max-width flex column
html = html.replace(`<div class="grid lg:grid-cols-3 gap-16">`, `<div class="max-w-4xl mx-auto flex flex-col gap-12">`);
// Remove col-spans
html = html.replace(`<div class="lg:col-span-2 space-y-8 afu2">`, `<div class="space-y-8 afu2">`);
html = html.replace(`<div class="lg:col-span-1 afu3">`, `<div class="afu3 mt-6">`);
// Remove the sticky positioning from the form box since it is now below
html = html.replace(`class="bg-[#f8f9fa] p-8 rounded-2xl border border-gray-200 shadow-sm sticky top-32"`, `class="bg-[#f8f9fa] p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-sm"`);

// Make form grid again if it is full width so it is not too tall, maybe? 
// No, the user liked it stacked, but on a wide column, grid-cols-2 might be good. Let us keep it simple as it is right now.

fs.writeFileSync("service-details.html", html);

