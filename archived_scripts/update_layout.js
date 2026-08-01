const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");

const newLayout = `
<!-- TESTIMONIALS -->
<section class="py-28 bg-[#f4f6f9] border-t border-gray-200 overflow-hidden">
  
  <div class="text-center mb-16 max-w-2xl mx-auto px-5">
    <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold text-[#111111] mb-6 tracking-widest uppercase">
      <span class="w-2 h-2 rounded-full bg-[#111111]"></span> Client Stories
    </div>
    <h2 class="font-display text-4xl sm:text-5xl font-extrabold text-black tracking-tight">What our clients <br class="hidden sm:block">say about <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#c89f45]">us</span></h2>
  </div>

  <div class="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    
    <!-- Left Side: Logo/Brand -->
    <div class="flex justify-center lg:justify-end">
      <img src="images/reiadtyping.jpeg" alt="AL REIAD Typing Services" class="w-full max-w-[450px] h-auto object-cover rounded-3xl shadow-[0_20px_50px_-20px_rgba(29,39,87,0.3)] border-4 border-white">
    </div>

    <!-- Right Side: Changeable Testimonial (Slider) -->
    <div class="relative bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-[600px] w-full mx-auto lg:mx-0">
`;

// Replace from <!-- TESTIMONIALS --> up to <!-- Quote Icon -->
const regex = /<!-- TESTIMONIALS -->[\s\S]*?<!-- Right Side: Changeable Testimonial \(Slider\) -->[\s\S]*?<div class="relative bg-white[^>]*>/;
if(html.match(regex)) {
    html = html.replace(regex, newLayout.trim());
    fs.writeFileSync("index.html", html);
    console.log("Updated layout successfully.");
} else {
    console.log("Could not match the section to update.");
}

