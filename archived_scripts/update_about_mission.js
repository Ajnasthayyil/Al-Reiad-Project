const fs = require("fs");
let html = fs.readFileSync("about.html", "utf8");

const startToken = `<section class="py-24 bg-[#f4f6f9] border-y border-gray-200">`;
const endToken = `<!-- OUR EXPERTISE -->`;

const startIndex = html.indexOf(startToken);
const endIndex = html.indexOf(endToken);

if (startIndex !== -1 && endIndex !== -1) {
    let sectionContent = html.substring(startIndex, endIndex);

    // Remove the old Mission & Vision cards from inside the left div
    const oldCardsRegex = /<!-- Mission & Vision Cards moved under paragraphs -->[\s\S]*?(?=<\/div>\s*<!-- Right Side: Dark Image -->)/;
    sectionContent = sectionContent.replace(oldCardsRegex, "");

    // The current wrapper is <div class="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
    // We want to change the main wrapper to just block, and put the grid inside.
    const oldWrapper = `<div class="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">`;
    const newWrapper = `<div class="max-w-7xl mx-auto px-5 sm:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">`;
    sectionContent = sectionContent.replace(oldWrapper, newWrapper);

    // Now close the top grid and add the 3 columns at the end of the section
    const closingRegex = /<\/div>\s*<\/section>/;
    const newCards = `</div>
      
      <!-- Mission, Vision, Values -->
      <div class="grid sm:grid-cols-3 gap-8 relative z-10">
        <div class="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(29,39,87,0.1)] hover:-translate-y-2 transition-all duration-300">
          <div class="w-14 h-14 rounded-2xl bg-[#fdf8ee] flex items-center justify-center text-[#c89f45] mb-6">
            <i class="fa-solid fa-bullseye text-2xl"></i>
          </div>
          <h3 class="font-display text-2xl lg:text-3xl font-bold text-[#111111] mb-4">Our Mission</h3>
          <p class="text-gray-600 text-base lg:text-lg leading-relaxed">To provide seamless, accurate, and fast government typing and documentation services for individuals and businesses in Al Ain.</p>
        </div>
        <div class="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(29,39,87,0.1)] hover:-translate-y-2 transition-all duration-300">
          <div class="w-14 h-14 rounded-2xl bg-[#fdf8ee] flex items-center justify-center text-[#c89f45] mb-6">
            <i class="fa-solid fa-eye text-2xl"></i>
          </div>
          <h3 class="font-display text-2xl lg:text-3xl font-bold text-[#111111] mb-4">Our Vision</h3>
          <p class="text-gray-600 text-base lg:text-lg leading-relaxed">To be the most trusted and preferred partner for typing, business setup, and government services in the UAE.</p>
        </div>
        <div class="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(29,39,87,0.1)] hover:-translate-y-2 transition-all duration-300">
          <div class="w-14 h-14 rounded-2xl bg-[#fdf8ee] flex items-center justify-center text-[#c89f45] mb-6">
            <i class="fa-solid fa-gem text-2xl"></i>
          </div>
          <h3 class="font-display text-2xl lg:text-3xl font-bold text-[#111111] mb-4">Our Values</h3>
          <p class="text-gray-600 text-base lg:text-lg leading-relaxed">Accuracy, efficiency, transparency, and a relentless commitment to exceptional customer service in every interaction.</p>
        </div>
      </div>
    </div>
  </section>`;
    
    sectionContent = sectionContent.replace(closingRegex, newCards);
    
    // Replace the main HTML
    html = html.substring(0, startIndex) + sectionContent + html.substring(endIndex);
    fs.writeFileSync("about.html", html);
    console.log("Updated about layout successfully.");
} else {
    console.log("Could not find start/end tokens.");
}

