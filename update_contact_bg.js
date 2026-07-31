const fs = require("fs");
let html = fs.readFileSync("contact.html", "utf8");

const oldSection = `<section class="pt-40 pb-20 px-5 sm:px-8 max-w-4xl mx-auto text-center bg-[#f4f6f9]">
  <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold text-[#111111] mb-6 tracking-widest uppercase">
    <span class="w-2 h-2 rounded-full bg-[#111111]"></span> Contact Us
  </span>
  <h1 class="font-display text-3xl lg:text-5xl font-extrabold text-black leading-[1.1] mb-6 tracking-tight">How can we help you <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#c89f45]">today?</span></h1>
</section>`;

const newSection = `<section class="pt-40 pb-10 bg-[#f4f6f9]">
  <div class="px-5 sm:px-8 max-w-4xl mx-auto text-center">
    <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold text-[#111111] mb-6 tracking-widest uppercase">
      <span class="w-2 h-2 rounded-full bg-[#111111]"></span> Contact Us
    </span>
    <h1 class="font-display text-3xl lg:text-5xl font-extrabold text-black leading-[1.1] mb-6 tracking-tight">How can we help you <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#c89f45]">today?</span></h1>
  </div>
</section>`;

html = html.replace(oldSection, newSection);
fs.writeFileSync("contact.html", html);
console.log("Updated contact.html");

