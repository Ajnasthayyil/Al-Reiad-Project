const fs = require("fs");
const files = ["about.html", "team.html"];
const imgFooter = `<img src="images/logo1.png" alt="AL REIAD Logo" class="h-20 lg:h-24 w-auto object-contain scale-110 origin-left">`;

const footerRegex = /<div class="flex items-center gap-3 mb-6">[\s\S]*?<span class="w-10 h-10 rounded-lg bg-\[#111111\] flex items-center justify-center shrink-0">[\s\S]*?<\/span>[\s\S]*?<\/div>/i;

files.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    let updated = false;

    if (footerRegex.test(content)) {
        content = content.replace(footerRegex, `<div class="flex items-center gap-3 mb-6">\n            ${imgFooter}\n          </div>`);
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(file, content);
        console.log("Updated footer logo in " + file);
    }
});

