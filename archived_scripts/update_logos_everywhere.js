const fs = require("fs");

const files = ["index.html", "about.html", "services.html", "gallery.html", "team.html", "contact.html"];
const imgHeader = `<img src="images/Alreiadlogo.png" alt="AL REIAD Logo" class="h-14 w-auto object-contain rounded-lg">`;
const imgFooter = `<img src="images/Alreiadlogo.png" alt="AL REIAD Logo" class="h-12 w-auto object-contain rounded-lg">`;

const textHeaderOld = `<span class="w-12 h-12 rounded-lg bg-[#111111] flex items-center justify-center shrink-0">
          <span class="font-sans text-white text-2xl font-bold">A</span>
        </span>
        <span class="flex flex-col leading-none">
          <span class="font-sans text-[#111111] text-xl font-bold tracking-tight">AL REIAD</span>
          <span class="font-sans text-[#111111] text-[10px] uppercase font-bold tracking-widest mt-1">Typing & Studio
            Services</span>
        </span>`;

const textHeaderOld2 = `<span class="w-12 h-12 rounded-lg bg-[#111111] flex items-center justify-center shrink-0">
          <span class="font-sans text-white text-2xl font-bold">A</span>
        </span>
        <span class="flex flex-col leading-none">
          <span class="font-sans text-[#111111] text-xl font-bold tracking-tight">AL REIAD</span>
          <span class="font-sans text-[#111111] text-[10px] uppercase font-bold tracking-widest mt-1">Typing &amp; Studio
            Services</span>
        </span>`;

const textFooterOld = `<span class="w-10 h-10 rounded-lg bg-[#111111] flex items-center justify-center shrink-0">
            <span class="font-sans text-white text-lg font-bold">A</span>
          </span>
          <span class="font-sans text-[#111111] text-base font-bold tracking-tight">AL REIAD <br><span
              class="text-[9px] uppercase tracking-widest">Typing & Studio Services</span></span>`;

const textFooterOld2 = `<span class="w-10 h-10 rounded-lg bg-[#111111] flex items-center justify-center shrink-0">
            <span class="font-sans text-white text-lg font-bold">A</span>
          </span>
          <span class="font-sans text-[#111111] text-base font-bold tracking-tight">AL REIAD <br><span
              class="text-[9px] uppercase tracking-widest">Typing &amp; Studio Services</span></span>`;

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, "utf8");
        let updated = false;

        if (content.includes(textHeaderOld)) {
            content = content.replace(textHeaderOld, imgHeader);
            updated = true;
        }
        if (content.includes(textHeaderOld2)) {
            content = content.replace(textHeaderOld2, imgHeader);
            updated = true;
        }

        if (content.includes(textFooterOld)) {
            content = content.replace(textFooterOld, imgFooter);
            updated = true;
        }
        if (content.includes(textFooterOld2)) {
            content = content.replace(textFooterOld2, imgFooter);
            updated = true;
        }
        
        // Also just catch logo.jpeg in case they were reverted or missed
        if (content.includes(`src="images/logo.jpeg"`)) {
            content = content.split(`src="images/logo.jpeg"`).join(`src="images/Alreiadlogo.png"`);
            updated = true;
        }

        if (updated) {
            fs.writeFileSync(file, content);
            console.log("Replaced text/jpeg logo with Alreiadlogo in " + file);
        }
    } catch (e) {
        console.log("Error in " + file + ": " + e.message);
    }
});

