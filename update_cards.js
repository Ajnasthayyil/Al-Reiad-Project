const fs = require("fs");
let html = fs.readFileSync("about.html", "utf8");

const oldTyping = `        <!-- Typing Services Tag Cloud -->
        <div class="bg-[#f4f6f9] rounded-3xl p-8 lg:p-10 border border-gray-100">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#c89f45]">`;
            
const newTyping = `        <!-- Typing Services Tag Cloud -->
        <div class="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 rounded-2xl bg-[#f4f6f9] flex items-center justify-center text-[#c89f45]">`;
            
const oldStudio = `        <!-- Studio Services Tag Cloud -->
        <div class="bg-[#111111] rounded-3xl p-8 lg:p-10 shadow-[0_20px_40px_-15px_rgba(29,39,87,0.3)]">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 rounded-2xl bg-[#222222] flex items-center justify-center text-[#c89f45]">
              <i class="fa-solid fa-camera text-xl"></i>
            </div>
            <h3 class="font-display text-2xl font-bold text-white">Studio Services</h3>`;

const newStudio = `        <!-- Studio Services Tag Cloud -->
        <div class="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 rounded-2xl bg-[#f4f6f9] flex items-center justify-center text-[#c89f45]">
              <i class="fa-solid fa-camera text-xl"></i>
            </div>
            <h3 class="font-display text-2xl font-bold text-[#111111]">Studio Services</h3>`;

html = html.replace(oldTyping, newTyping);
html = html.replace(oldStudio, newStudio);

// Replace the pills inside typing (bg-white shadow-sm -> bg-[#f4f6f9])
const oldTypingPill = `class="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:border-[#111111] hover:text-[#111111] transition-colors cursor-default shadow-sm"`;
const newPill = `class="px-5 py-2.5 rounded-xl bg-[#f4f6f9] border border-gray-200 text-gray-700 font-medium text-sm hover:border-[#111111] hover:text-[#111111] transition-colors cursor-default"`;
html = html.split(oldTypingPill).join(newPill);

// Replace the pills inside studio
const oldStudioPill = `class="px-5 py-2.5 rounded-xl bg-[#222222] border border-gray-700 text-gray-300 font-medium text-sm hover:border-[#c89f45] hover:text-white transition-colors cursor-default"`;
html = html.split(oldStudioPill).join(newPill);

fs.writeFileSync("about.html", html);
console.log("Updated cards to white theme");

