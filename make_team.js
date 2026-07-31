const fs = require("fs");
let html = fs.readFileSync("about.html", "utf8");

// We keep header and footer.
// We replace everything between </header> and <footer>.

const parts = html.split("</header>");
const headerPart = parts[0] + "</header>";

const parts2 = parts[1].split("<footer");
const footerPart = "<footer" + parts2[1];

// Also update title
let finalHeader = headerPart.replace("<title>About Us | AL REIAD TYPING & STUDIO SERVICES</title>", "<title>Our Team | AL REIAD TYPING & STUDIO SERVICES</title>");
finalHeader = finalHeader.replace(`border-b-2 border-[#111111] pb-1">About</a>`, `hover:text-[#a37e32] transition-colors">About</a>`);
finalHeader = finalHeader.replace(`hover:text-[#a37e32] transition-colors">Team</a>`, `border-b-2 border-[#111111] pb-1">Team</a>`);

const teamContent = `
  <!-- HERO -->
  <section class="pt-40 pb-20 px-5 sm:px-8 max-w-4xl mx-auto text-center">
    <span class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold text-[#111111] mb-8 tracking-widest uppercase relative z-30 w-fit">
      <span class="w-2 h-2 rounded-full bg-[#111111]"></span> Our People
    </span>
    <h1 class="font-display text-3xl lg:text-5xl font-extrabold text-black leading-[1.1] mb-6 tracking-tight">Meet the <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#c89f45]">Experts Behind AL REIAD</span></h1>
    <p class="text-gray-600 mt-10 text-lg leading-relaxed">Our dedicated professionals are here to provide you with seamless, accurate, and fast services. Get to know the team that makes it happen.</p>
  </section>

  <!-- TEAM GRID -->
  <section class="py-24 bg-[#f4f6f9] border-y border-gray-200">
    <div class="max-w-7xl mx-auto px-5 sm:px-8">
      
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        
        <!-- Team Member 1 -->
        <div class="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(29,39,87,0.1)] hover:-translate-y-2 transition-all duration-300 group">
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
        <div class="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(29,39,87,0.1)] hover:-translate-y-2 transition-all duration-300 group mt-0 md:mt-12">
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
        <div class="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(29,39,87,0.1)] hover:-translate-y-2 transition-all duration-300 group">
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
  </section>

  <!-- CTA -->
  <section class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-5 sm:px-8 text-center">
      <h2 class="font-sans text-3xl sm:text-4xl font-bold text-[#111111]">Need Professional Typing or Government Services?</h2>
      <a href="contact.html" class="inline-flex items-center gap-3 mt-10 bg-[#111111] text-white font-bold px-10 py-4 rounded-full hover:bg-[#111111]-hover shadow-md transition-all text-lg hover:-translate-y-1">
        Contact Now
        <span class="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
          <i class="fa-solid fa-arrow-right text-[#111111] text-sm"></i>
        </span>
      </a>
    </div>
  </section>
`;

fs.writeFileSync("team.html", finalHeader + "\n" + teamContent + "\n" + footerPart);
console.log("Created team.html");

