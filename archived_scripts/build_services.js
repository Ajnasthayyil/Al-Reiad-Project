const fs = require("fs");

const categories = [
  {
    title: "Visa Services",
    items: [
      "New Residency Visa", "Renew Residency Visa", "Cancel Residency Visa",
      "Golden Visa Nomination", "Golden Visa Full Process", "Transfer Visa To New Passport",
      "Data Modification", "New Born Visa", "Dependents On Hold"
    ]
  },
  {
    title: "Business Setup/Trading License",
    items: [
      "New Business Consultancy", "Renew Trade License", "Amend Trade License",
      "Cancel Trade License"
    ]
  },
  {
    title: "Domestic Visa Services",
    items: [
      "New Residency Visa", "Absconding Report", "Cancel Residency Visa",
      "Renew Residency Visa"
    ]
  },
  {
    title: "Visit / Tourist Visa",
    items: [
      "UAE Tourist Visa", "Saudi Arabia Visa"
    ]
  },
  {
    title: "Vehicles & Drivers",
    items: [
      "Pay Traffic Fines", "Traffic Fines Discount", "Mawaqif Residential Permit",
      "Vehicle Insurance", "Vehicle Registration Renewal", "Black Points Transfer",
      "International Driving License", "Vehicle Ownership Transfer", "Driving License Renewal"
    ]
  },
  {
    title: "Other Services",
    items: [
      "Passport Size Photos", "Emirates ID Application Photos", "Foreign Country Visa Size Photos",
      "Frame Works", "Photocopies And PDF Services", "Lamination Services", "Photo Album",
      "Watch Services", "Car Keys And Batteries", "Curriculum Vitae"
    ]
  }
];

let html = `<!-- SERVICES -->
<section class="pt-40 pb-24 bg-white">
  <div class="max-w-7xl mx-auto px-5 sm:px-8">
    <div class="max-w-4xl mb-16 mx-auto text-center">
      <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold text-[#111111] mb-8 tracking-widest uppercase">
        <span class="w-2 h-2 rounded-full bg-[#111111]"></span> What We Do
      </div>
      <h2 class="font-display text-3xl lg:text-5xl font-extrabold text-black leading-[1.1] mb-6 tracking-tight">Our comprehensive range of <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#c89f45]">services</span></h2>
      <p class="text-gray-600 leading-relaxed max-w-2xl mx-auto">We offer a full spectrum of typing, government, and studio services tailored to individuals and businesses.</p>
    </div>
    
`;

categories.forEach(cat => {
  html += `    <div class="mb-20">\n`;
  html += `      <h3 class="font-display text-3xl font-bold text-[#111111] mb-8">${cat.title}</h3>\n`;
  html += `      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">\n`;
  
  cat.items.forEach(item => {
    html += `        <a href="#" class="block bg-[#faeaeb] border border-[#d62839]/60 rounded-xl py-6 px-4 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:bg-gradient-to-r hover:from-[#c2a2b7] hover:to-[#eb9faa] transition-all duration-300 group">\n`;
    html += `          <span class="font-bold text-[#111111] text-[15px] group-hover:text-black">${item}</span>\n`;
    html += `        </a>\n`;
  });
  
  html += `      </div>\n`;
  html += `    </div>\n\n`;
});

html += `  </div>\n</section>\n`;

// read services.html
let content = fs.readFileSync("services.html", "utf8");

// find start and end
const startTag = "<!-- SERVICES -->";
const endTag = "<section class=\"py-24 bg-[#f4f6f9] border-t border-gray-200\">";

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + html + "\n" + content.substring(endIndex);
  fs.writeFileSync("services.html", content);
  console.log("Updated services.html");
} else {
  console.log("Could not find boundaries.");
}

