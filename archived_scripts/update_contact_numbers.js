const fs = require("fs");

const contactPageHtml = `<div class="space-y-4">
            <a href="tel:+971543632979" class="flex items-center gap-4 text-[#111111] font-semibold hover:text-[#c89f45] transition-colors">
              <span class="w-10 h-10 rounded-full bg-[#f4f6f9] flex items-center justify-center shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </span>
              <span>0543632979 <span class="text-xs text-gray-500 font-normal ml-1">(Studio)</span></span>
            </a>
            <a href="https://wa.me/971501951302" class="flex items-center gap-4 text-[#111111] font-semibold hover:text-[#25D366] transition-colors">
              <span class="w-10 h-10 rounded-full bg-[#f4f6f9] flex items-center justify-center shrink-0 text-[#25D366]">
                <i class="fa-brands fa-whatsapp text-lg"></i>
              </span>
              <span>0501951302 <span class="text-xs text-gray-500 font-normal ml-1">(Typing WhatsApp)</span></span>
            </a>
            <a href="tel:+971509613479" class="flex items-center gap-4 text-[#111111] font-semibold hover:text-[#c89f45] transition-colors">
              <span class="w-10 h-10 rounded-full bg-[#f4f6f9] flex items-center justify-center shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </span>
              <span>0509613479 <span class="text-xs text-gray-500 font-normal ml-1">(Typing Calling)</span></span>
            </a>`;

const footerNumbersHtml = `<a href="tel:+971543632979" class="flex items-center gap-4 group">
          <div class="w-10 h-10 rounded-full bg-[#111111]/5 flex items-center justify-center text-[#111111] group-hover:bg-[#c89f45] group-hover:text-white transition-all duration-300 shrink-0">
            <i class="fa-solid fa-phone"></i>
          </div>
          <span class="group-hover:text-[#c89f45] transition-colors flex flex-col">
            <span>0543632979</span>
            <span class="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-[#c89f45]">Studio</span>
          </span>
        </a>
        <a href="https://wa.me/971501951302" class="flex items-center gap-4 group">
          <div class="w-10 h-10 rounded-full bg-[#111111]/5 flex items-center justify-center text-[#111111] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300 shrink-0">
            <i class="fa-brands fa-whatsapp"></i>
          </div>
          <span class="group-hover:text-[#25D366] transition-colors flex flex-col">
            <span>0501951302</span>
            <span class="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-[#25D366]">Typing WhatsApp</span>
          </span>
        </a>
        <a href="tel:+971509613479" class="flex items-center gap-4 group">
          <div class="w-10 h-10 rounded-full bg-[#111111]/5 flex items-center justify-center text-[#111111] group-hover:bg-[#c89f45] group-hover:text-white transition-all duration-300 shrink-0">
            <i class="fa-solid fa-phone"></i>
          </div>
          <span class="group-hover:text-[#c89f45] transition-colors flex flex-col">
            <span>0509613479</span>
            <span class="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-[#c89f45]">Typing Calling</span>
          </span>
        </a>`;

const files = ["index.html", "about.html", "services.html", "gallery.html", "team.html", "contact.html"];

files.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    let updated = false;

    // Fix Footer
    const footerRegex = /<a href="tel:\+971501951302" class="flex items-center gap-4 group">[\s\S]*?<\/a>/i;
    if (footerRegex.test(content)) {
        content = content.replace(footerRegex, footerNumbersHtml);
        updated = true;
    }

    // Fix contact page specifically
    if (file === "contact.html") {
        const contactPageRegex = /<p class="flex items-center gap-4 text-\[#111111\] font-semibold">[\s\S]*?<span class="w-10 h-10 rounded-full bg-\[#f4f6f9\] flex items-center justify-center shrink-0">[\s\S]*?<svg class="w-4 h-4"[^>]*>.*?<\/svg>[\s\S]*?<\/span>[\s\S]*?\+971 50 195 1302[\s\S]*?<\/p>/i;
        if (contactPageRegex.test(content)) {
            content = content.replace(contactPageRegex, contactPageHtml);
            updated = true;
        }
    }

    if (updated) {
        fs.writeFileSync(file, content);
        console.log("Updated numbers in " + file);
    }
});

