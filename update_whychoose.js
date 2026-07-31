const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");

const oldGrid = `<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">`;
const newGrid = `<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">`;

const newItem = `
        <div class="bg-[#f4f6f9] rounded-3xl p-8 lg:p-10 border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 group">
          <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#111111] mb-8 group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
            <i class="fa-solid fa-handshake text-2xl"></i>
          </div>
          <h3 class="font-display font-bold text-2xl text-black mb-4">End-to-End Support</h3>
          <p class="text-gray-500 leading-relaxed font-medium">We handle everything from start to finish, ensuring a completely hassle-free experience.</p>
        </div>`;

// First replace the grid class
html = html.replace(oldGrid, newGrid);

// Find the Dedicated Support item to append the new item after it
const target = `Through every complex procedure.</p>
        </div>`;
        
// The original html has: "through every complex procedure.</p>\n        </div>"
// Let us use regex to find the end of the third item
const matchStr = /<h3[^>]*>Dedicated Support<\/h3>[\s\S]*?<\/div>/;
if (html.match(matchStr)) {
    html = html.replace(matchStr, match => match + newItem);
    
    // Also, adjust p-10 to p-8 lg:p-10 on the existing 3 items so they fit better in 4 columns
    const itemTarget = `bg-[#f4f6f9] rounded-3xl p-10 border border-gray-100`;
    html = html.split(itemTarget).join(`bg-[#f4f6f9] rounded-3xl p-8 lg:p-10 border border-gray-100`);
    
    fs.writeFileSync("index.html", html);
    console.log("Updated Why Choose AL REIAD with 4th item.");
} else {
    console.log("Could not find the target to insert.");
}

