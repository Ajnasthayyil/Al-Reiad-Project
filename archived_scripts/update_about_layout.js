const fs = require("fs");
let html = fs.readFileSync("about.html", "utf8");

// 1. Remove the standalone image section we added previously
const imgSectionRegex = /<!-- STUDIO & TYPING IMAGE -->[\s\S]*?<section class="py-12 bg-white">[\s\S]*?<\/section>/;
html = html.replace(imgSectionRegex, "");

// 2. Re-arrange the A commitment to excellence section
const sectionRegex = /(<section class="py-24 bg-\[#f4f6f9\] border-y border-gray-200">[\s\S]*?)(<p class="text-gray-600 mt-4 text-lg leading-relaxed">[\s\S]*?<\/p>)([\s\S]*?)(<div class="grid gap-6">[\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/;

const newSection = `
  <section class="py-24 bg-[#f4f6f9] border-y border-gray-200">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
      
      <!-- Left Side: Text and Mission/Vision -->
      <div>
        <div class="inline-flex items-center gap-2 mb-4">
          <span class="w-2 h-2 rounded-full bg-[#111111]"></span>
          <span class="text-[#111111] font-bold tracking-widest uppercase text-[11px]">Our Story</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-black tracking-tight">A commitment to excellence</h2>
        <p class="text-gray-600 mt-6 text-lg leading-relaxed mb-4">Our experienced team provides fast, accurate, and reliable assistance for visa applications, Emirates ID, labour services, traffic department services, municipality services, TAMM services, family visas, domestic worker visas, photocopying, passport photos, and much more.</p>
        <p class="text-gray-600 text-lg leading-relaxed mb-10">We understand that government processes can be complex and time-consuming. That's why we handle every detail with precision and care, ensuring a smooth and hassle-free experience for our clients.</p>
        
        <!-- Mission & Vision Cards moved under paragraphs -->
        <div class="grid sm:grid-cols-2 gap-6">
          <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 class="font-sans text-xl font-bold text-[#111111] mb-2">Our Mission</h3>
            <p class="text-gray-600 text-sm leading-relaxed">To provide seamless, accurate, and fast government typing and documentation services for individuals and businesses in Al Ain.</p>
          </div>
          <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 class="font-sans text-xl font-bold text-[#111111] mb-2">Our Vision</h3>
            <p class="text-gray-600 text-sm leading-relaxed">To be the most trusted and preferred partner for typing, business setup, and government services in the UAE.</p>
          </div>
        </div>
      </div>
      
      <!-- Right Side: Dark Image -->
      <div class="w-full flex justify-center lg:justify-end">
        <img src="images/reiadtyping1.jpeg" alt="AL REIAD Studio and Typing" class="w-full max-w-[500px] h-auto rounded-3xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)] border border-gray-200 object-cover">
      </div>
      
    </div>
  </section>
`;

const replaceRegex = /<section class="py-24 bg-\[#f4f6f9\] border-y border-gray-200">[\s\S]*?<\/section>/;

if (html.match(replaceRegex)) {
    html = html.replace(replaceRegex, newSection.trim());
    fs.writeFileSync("about.html", html);
    console.log("Updated about page layout.");
} else {
    console.log("Could not find the section to replace.");
}

