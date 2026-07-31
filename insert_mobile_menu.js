const fs = require("fs");

const files = ["index.html", "about.html", "services.html", "gallery.html", "team.html", "contact.html"];
const menuHtml = `
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="lg:hidden bg-white border-t border-gray-100">
      <div class="px-5 py-6 flex flex-col gap-4 font-semibold text-[15px] text-[#111111]">
        <a href="index.html" class="hover:text-[#c89f45] transition-colors border-b border-gray-100 pb-3">Home</a>
        <a href="about.html" class="hover:text-[#c89f45] transition-colors border-b border-gray-100 pb-3">About</a>
        <a href="services.html" class="hover:text-[#c89f45] transition-colors border-b border-gray-100 pb-3">Services</a>
        <a href="gallery.html" class="hover:text-[#c89f45] transition-colors border-b border-gray-100 pb-3">Gallery</a>
        <a href="team.html" class="hover:text-[#c89f45] transition-colors border-b border-gray-100 pb-3">Team</a>
        <a href="contact.html" class="hover:text-[#c89f45] transition-colors pb-3">Contact</a>
        <a href="tel:+971501951302" class="mt-2 inline-flex items-center justify-center gap-3 bg-[#111111] text-white font-medium text-[15px] px-8 py-3 rounded-full hover:bg-[#a37e32] transition-colors">
          <i class="fa-solid fa-phone text-sm"></i>
          +971 50 195 1302
        </a>
      </div>
    </div>
`;

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, "utf8");
        // Check if mobile menu is already there to avoid duplicates
        if (!content.includes(`id="mobile-menu"`)) {
            content = content.replace("</header>", menuHtml + "\n  </header>");
            fs.writeFileSync(file, content);
            console.log("Injected mobile menu into " + file);
        } else {
            console.log("Mobile menu already in " + file);
        }
    } catch (e) {
        console.log("Error with " + file + ": " + e.message);
    }
});

