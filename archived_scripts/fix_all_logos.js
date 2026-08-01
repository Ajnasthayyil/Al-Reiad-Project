const fs = require("fs");
const files = ["index.html", "about.html", "services.html", "gallery.html", "team.html", "contact.html"];
const imgHeader = `<img src="images/Alreiadlogo.png" alt="AL REIAD Logo" class="h-14 w-auto object-contain rounded-lg">`;
const imgFooter = `<img src="images/Alreiadlogo.png" alt="AL REIAD Logo" class="h-12 w-auto object-contain rounded-lg">`;

files.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    let updated = false;

    // Header Logo
    const headerLogoRegex = /<!-- Logo -->[\s\S]*?<a href="index\.html"[^>]*>([\s\S]*?)<\/a>/i;
    if (headerLogoRegex.test(content)) {
        content = content.replace(headerLogoRegex, (match, p1) => {
            return match.replace(p1, "\n        " + imgHeader + "\n      ");
        });
        updated = true;
    }

    // Footer Logo
    const footerLogoRegex = /<a href="index\.html" class="flex items-center gap-3 mb-6">([\s\S]*?)<\/a>/i;
    if (footerLogoRegex.test(content)) {
        content = content.replace(footerLogoRegex, (match, p1) => {
            return match.replace(p1, "\n          " + imgFooter + "\n        ");
        });
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(file, content);
        console.log("Updated logos in " + file);
    }
});

