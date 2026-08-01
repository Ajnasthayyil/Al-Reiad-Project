const fs = require("fs");
const indexContent = fs.readFileSync("index.html", "utf8");

const testimonialsBlock = `
<!-- TESTIMONIALS -->
<section class="py-28 bg-[#f4f6f9] border-t border-gray-200">
  <div class="max-w-7xl mx-auto px-5 sm:px-8">
    <div class="text-center mb-16 max-w-2xl mx-auto">
      <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold text-[#111111] mb-6 tracking-widest uppercase">
        <span class="w-2 h-2 rounded-full bg-[#111111]"></span> Testimonials
      </div>
      <h2 class="font-display text-4xl sm:text-5xl font-extrabold text-black tracking-tight">What our clients say</h2>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Testimonial 1 -->
      <div class="bg-white rounded-3xl p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
        <div class="flex gap-1 mb-6">
          <i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
          <i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
          <i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
          <i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
          <i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
        </div>
        <p class="text-gray-600 font-medium leading-relaxed mb-8 relative z-10">"AL REIAD has been handling my company's visa and trade license processes for two years. They are incredibly fast, professional, and completely transparent with their procedures."</p>
        <div class="flex items-center gap-4 border-t border-gray-100 pt-6">
          <div class="w-12 h-12 rounded-full bg-[#111111]/5 flex items-center justify-center text-[#111111] font-bold font-display text-lg">A</div>
          <div>
            <h4 class="font-bold text-[#111111]">Ahmed Al Mansoori</h4>
            <p class="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Business Owner</p>
          </div>
        </div>
      </div>
      
      <!-- Testimonial 2 -->
      <div class="bg-white rounded-3xl p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
        <div class="flex gap-1 mb-6">
          <i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
          <i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
          <i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
          <i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
          <i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
        </div>
        <p class="text-gray-600 font-medium leading-relaxed mb-8 relative z-10">"I needed emergency typing services for my family visa application, and the team at AL REIAD went above and beyond to ensure everything was submitted perfectly on the same day."</p>
        <div class="flex items-center gap-4 border-t border-gray-100 pt-6">
          <div class="w-12 h-12 rounded-full bg-[#c89f45]/10 flex items-center justify-center text-[#c89f45] font-bold font-display text-lg">S</div>
          <div>
            <h4 class="font-bold text-[#111111]">Sarah Jenkins</h4>
            <p class="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Resident</p>
          </div>
        </div>
      </div>
      
      <!-- Testimonial 3 -->
      <div class="bg-[#111111] rounded-3xl p-10 border border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative">
        <div class="flex gap-1 mb-6">
          <i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
          <i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
          <i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
          <i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
          <i class="fa-solid fa-star text-[#c89f45] text-sm"></i>
        </div>
        <p class="text-gray-300 font-medium leading-relaxed mb-8 relative z-10">"The best typing center in Al Ain. Their attention to detail in legal translation and immigration paperwork means I never have to worry about rejected applications anymore."</p>
        <div class="flex items-center gap-4 border-t border-gray-800 pt-6">
          <div class="w-12 h-12 rounded-full bg-[#222222] flex items-center justify-center text-white font-bold font-display text-lg">K</div>
          <div>
            <h4 class="font-bold text-white">Khalid Saif</h4>
            <p class="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Corporate Client</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const target = "<!-- CONTACT FORM matching the new style -->";
const replacement = testimonialsBlock + "\n" + target;

if (indexContent.includes(target)) {
    const newIndex = indexContent.replace(target, replacement);
    fs.writeFileSync("index.html", newIndex);
    console.log("Successfully injected testimonials into index.html");
} else {
    console.log("Could not find target in index.html to inject.");
}

