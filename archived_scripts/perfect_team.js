const fs = require("fs");
let html = fs.readFileSync("team.html", "utf8");

const oldGrid = `<section class="py-24 bg-[#f4f6f9] border-y border-gray-200">
    <div class="max-w-5xl mx-auto px-5 sm:px-8">
      
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        
        <!-- Team Member 1 -->
        <div class="bg-white rounded-3xl p-6 max-w-xs mx-auto w-full border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(29,39,87,0.1)] hover:-translate-y-2 transition-all duration-300 group">
          <div class="relative overflow-hidden rounded-2xl mb-6 bg-gray-100">
            <img src="images/staff1.jpeg" onerror="this.src='images/staff1.png'" alt="Karun P" class="w-full aspect-[4/5] object-cover object-top group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="text-center px-4 pb-2">
            <p class="text-[#c89f45] text-xs font-bold uppercase tracking-widest mb-2">Owner</p>
            <h3 class="font-display text-2xl font-bold text-[#111111]">Karun P</h3>
          </div>
        </div>

        <!-- Team Member 2 -->
        <div class="bg-white rounded-3xl p-6 max-w-xs mx-auto w-full border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(29,39,87,0.1)] hover:-translate-y-2 transition-all duration-300 group mt-0 md:mt-12">
          <div class="relative overflow-hidden rounded-2xl mb-6 bg-gray-100">
            <img src="images/staff2.png" onerror="this.src='images/staff2.jpeg'" alt="Ibrahim KK" class="w-full aspect-[4/5] object-cover object-top group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="text-center px-4 pb-2">
            <p class="text-[#c89f45] text-xs font-bold uppercase tracking-widest mb-2">Manager Cum PRO</p>
            <h3 class="font-display text-2xl font-bold text-[#111111]">Ibrahim KK</h3>
          </div>
        </div>

        <!-- Team Member 3 -->
        <div class="bg-white rounded-3xl p-6 max-w-xs mx-auto w-full border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(29,39,87,0.1)] hover:-translate-y-2 transition-all duration-300 group">
          <div class="relative overflow-hidden rounded-2xl mb-6 bg-gray-100">
            <img src="images/staff3.png" onerror="this.src='images/staff3.jpeg'" alt="Muhammed Sanan" class="w-full aspect-[4/5] object-cover object-top group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="text-center px-4 pb-2">
            <p class="text-[#c89f45] text-xs font-bold uppercase tracking-widest mb-2">Typist & Photographer</p>
            <h3 class="font-display text-2xl font-bold text-[#111111]">Muhammed Sanan</h3>
          </div>
        </div>

      </div>

    </div>
  </section>`;

const newGrid = `<section class="py-24 bg-[#f4f6f9] border-y border-gray-200 relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#c89f45]/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#111111]/5 rounded-full blur-3xl"></div>
    
    <div class="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
      
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        
        <!-- Team Member 1 -->
        <div class="bg-white rounded-[2rem] p-4 max-w-xs mx-auto w-full border border-gray-100 shadow-soft hover:shadow-[0_30px_60px_-15px_rgba(29,39,87,0.15)] hover:-translate-y-3 transition-all duration-500 group afu1">
          <div class="relative overflow-hidden rounded-2xl mb-6 bg-gray-50 aspect-[4/5]">
            <img src="images/staff1.jpeg" onerror="this.src='images/staff1.png'" alt="Karun P" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700">
            
            <!-- Elegant overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Hover content -->
            <div class="absolute bottom-0 left-0 w-full p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-center gap-4">
              <a href="#" class="w-10 h-10 rounded-full bg-white text-[#111111] flex items-center justify-center hover:bg-[#c89f45] hover:text-white transition-colors duration-300">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-white text-[#111111] flex items-center justify-center hover:bg-[#c89f45] hover:text-white transition-colors duration-300">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div class="text-center px-4 pb-4">
            <p class="text-[#c89f45] text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Owner</p>
            <h3 class="font-display text-2xl font-extrabold text-[#111111] mb-4 group-hover:text-[#c89f45] transition-colors duration-300">Karun P</h3>
            <div class="w-12 h-0.5 bg-gray-200 mx-auto group-hover:bg-[#c89f45] group-hover:w-20 transition-all duration-500"></div>
          </div>
        </div>

        <!-- Team Member 2 -->
        <div class="bg-white rounded-[2rem] p-4 max-w-xs mx-auto w-full border border-gray-100 shadow-soft hover:shadow-[0_30px_60px_-15px_rgba(29,39,87,0.15)] hover:-translate-y-3 transition-all duration-500 group afu2 md:translate-y-8 md:hover:translate-y-5">
          <div class="relative overflow-hidden rounded-2xl mb-6 bg-gray-50 aspect-[4/5]">
            <img src="images/staff2.png" onerror="this.src='images/staff2.jpeg'" alt="Ibrahim KK" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700">
            
            <div class="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="absolute bottom-0 left-0 w-full p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-center gap-4">
              <a href="#" class="w-10 h-10 rounded-full bg-white text-[#111111] flex items-center justify-center hover:bg-[#c89f45] hover:text-white transition-colors duration-300">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-white text-[#111111] flex items-center justify-center hover:bg-[#c89f45] hover:text-white transition-colors duration-300">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div class="text-center px-4 pb-4">
            <p class="text-[#c89f45] text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Manager Cum PRO</p>
            <h3 class="font-display text-2xl font-extrabold text-[#111111] mb-4 group-hover:text-[#c89f45] transition-colors duration-300">Ibrahim KK</h3>
            <div class="w-12 h-0.5 bg-gray-200 mx-auto group-hover:bg-[#c89f45] group-hover:w-20 transition-all duration-500"></div>
          </div>
        </div>

        <!-- Team Member 3 -->
        <div class="bg-white rounded-[2rem] p-4 max-w-xs mx-auto w-full border border-gray-100 shadow-soft hover:shadow-[0_30px_60px_-15px_rgba(29,39,87,0.15)] hover:-translate-y-3 transition-all duration-500 group afu3">
          <div class="relative overflow-hidden rounded-2xl mb-6 bg-gray-50 aspect-[4/5]">
            <img src="images/staff3.png" onerror="this.src='images/staff3.jpeg'" alt="Muhammed Sanan" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700">
            
            <div class="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="absolute bottom-0 left-0 w-full p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-center gap-4">
              <a href="#" class="w-10 h-10 rounded-full bg-white text-[#111111] flex items-center justify-center hover:bg-[#c89f45] hover:text-white transition-colors duration-300">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-white text-[#111111] flex items-center justify-center hover:bg-[#c89f45] hover:text-white transition-colors duration-300">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div class="text-center px-4 pb-4">
            <p class="text-[#c89f45] text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Typist & Photographer</p>
            <h3 class="font-display text-2xl font-extrabold text-[#111111] mb-4 group-hover:text-[#c89f45] transition-colors duration-300">Muhammed Sanan</h3>
            <div class="w-12 h-0.5 bg-gray-200 mx-auto group-hover:bg-[#c89f45] group-hover:w-20 transition-all duration-500"></div>
          </div>
        </div>

      </div>

    </div>
  </section>`;

if (html.includes(oldGrid)) {
  html = html.replace(oldGrid, newGrid);
  fs.writeFileSync("team.html", html);
  console.log("Updated team UI to be perfect");
} else {
  console.log("Could not find the old grid HTML exactly as expected. I will try a looser split.");
  
  const startTag = `<section class="py-24 bg-[#f4f6f9] border-y border-gray-200">`;
  const endTag = `  <!-- CTA -->`;
  
  if (html.includes(startTag) && html.includes(endTag)) {
    const p1 = html.split(startTag);
    const p2 = p1[1].split(endTag);
    
    html = p1[0] + newGrid + "\n\n" + endTag + p2[1];
    fs.writeFileSync("team.html", html);
    console.log("Updated via loose match");
  } else {
    console.log("Failed completely.");
  }
}

