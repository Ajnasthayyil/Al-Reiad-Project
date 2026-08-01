const fs = require("fs");
let html = fs.readFileSync("about.html", "utf8");

const newServicesSection = `
  <!-- OUR COMPREHENSIVE SERVICES -->
  <section class="py-24 bg-white border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-5 sm:px-8">
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold text-[#111111] mb-6 tracking-widest uppercase justify-center">
          <span class="w-2 h-2 rounded-full bg-[#111111]"></span> What We Do
        </span>
        <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-black tracking-tight">Everything you need in one place</h2>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-16">
        
        <!-- Typing Services Tag Cloud -->
        <div class="bg-[#f4f6f9] rounded-3xl p-8 lg:p-10 border border-gray-100">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#c89f45]">
              <i class="fa-solid fa-file-signature text-xl"></i>
            </div>
            <h3 class="font-display text-2xl font-bold text-[#111111]">Typing & Government</h3>
          </div>
          
          <div class="flex flex-wrap gap-3">
            <span class="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:border-[#111111] hover:text-[#111111] transition-colors cursor-default shadow-sm">Immigration Services</span>
            <span class="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:border-[#111111] hover:text-[#111111] transition-colors cursor-default shadow-sm">Labour And Tadbeer</span>
            <span class="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:border-[#111111] hover:text-[#111111] transition-colors cursor-default shadow-sm">Daman Services</span>
            <span class="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:border-[#111111] hover:text-[#111111] transition-colors cursor-default shadow-sm">Traffic Department</span>
            <span class="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:border-[#111111] hover:text-[#111111] transition-colors cursor-default shadow-sm">Family Visas</span>
            <span class="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:border-[#111111] hover:text-[#111111] transition-colors cursor-default shadow-sm">Vehicle Insurance</span>
            <span class="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:border-[#111111] hover:text-[#111111] transition-colors cursor-default shadow-sm">Visit Visa & Tickets</span>
            <span class="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:border-[#111111] hover:text-[#111111] transition-colors cursor-default shadow-sm">Tamm / UAE Pass</span>
            <span class="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:border-[#111111] hover:text-[#111111] transition-colors cursor-default shadow-sm">Economic Development</span>
            <span class="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:border-[#111111] hover:text-[#111111] transition-colors cursor-default shadow-sm">Police Clearance</span>
            <span class="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:border-[#111111] hover:text-[#111111] transition-colors cursor-default shadow-sm">Legal translations</span>
          </div>
        </div>
        
        <!-- Studio Services Tag Cloud -->
        <div class="bg-[#111111] rounded-3xl p-8 lg:p-10 shadow-[0_20px_40px_-15px_rgba(29,39,87,0.3)]">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 rounded-2xl bg-[#222222] flex items-center justify-center text-[#c89f45]">
              <i class="fa-solid fa-camera text-xl"></i>
            </div>
            <h3 class="font-display text-2xl font-bold text-white">Studio Services</h3>
          </div>
          
          <div class="flex flex-wrap gap-3">
            <span class="px-5 py-2.5 rounded-xl bg-[#222222] border border-gray-700 text-gray-300 font-medium text-sm hover:border-[#c89f45] hover:text-white transition-colors cursor-default">Passport Size Photos</span>
            <span class="px-5 py-2.5 rounded-xl bg-[#222222] border border-gray-700 text-gray-300 font-medium text-sm hover:border-[#c89f45] hover:text-white transition-colors cursor-default">Emirates ID Photos</span>
            <span class="px-5 py-2.5 rounded-xl bg-[#222222] border border-gray-700 text-gray-300 font-medium text-sm hover:border-[#c89f45] hover:text-white transition-colors cursor-default">Foreign Visa Photos</span>
            <span class="px-5 py-2.5 rounded-xl bg-[#222222] border border-gray-700 text-gray-300 font-medium text-sm hover:border-[#c89f45] hover:text-white transition-colors cursor-default">Frame Works</span>
            <span class="px-5 py-2.5 rounded-xl bg-[#222222] border border-gray-700 text-gray-300 font-medium text-sm hover:border-[#c89f45] hover:text-white transition-colors cursor-default">Photocopies & PDF</span>
            <span class="px-5 py-2.5 rounded-xl bg-[#222222] border border-gray-700 text-gray-300 font-medium text-sm hover:border-[#c89f45] hover:text-white transition-colors cursor-default">Lamination Services</span>
            <span class="px-5 py-2.5 rounded-xl bg-[#222222] border border-gray-700 text-gray-300 font-medium text-sm hover:border-[#c89f45] hover:text-white transition-colors cursor-default">Photo Album</span>
            <span class="px-5 py-2.5 rounded-xl bg-[#222222] border border-gray-700 text-gray-300 font-medium text-sm hover:border-[#c89f45] hover:text-white transition-colors cursor-default">Watch Services</span>
            <span class="px-5 py-2.5 rounded-xl bg-[#222222] border border-gray-700 text-gray-300 font-medium text-sm hover:border-[#c89f45] hover:text-white transition-colors cursor-default">Car Keys & Batteries</span>
            <span class="px-5 py-2.5 rounded-xl bg-[#222222] border border-gray-700 text-gray-300 font-medium text-sm hover:border-[#c89f45] hover:text-white transition-colors cursor-default">Curriculum Vitae</span>
          </div>
        </div>
        
      </div>
    </div>
  </section>
`;

const footerToken = `<footer class="bg-[#f4f6f9] border-t border-gray-200 pt-20 pb-10">`;

if (html.includes(footerToken)) {
  html = html.replace(footerToken, newServicesSection + "\n  " + footerToken);
  fs.writeFileSync("about.html", html);
  console.log("Added services to about page.");
} else {
  console.log("Could not find footer token");
}

