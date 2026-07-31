const fs = require("fs");
const files = ["index.html", "about.html", "services.html", "gallery.html", "team.html", "contact.html"];

const instaRegex = /href="#" aria-label="Instagram"/g;
const fbRegex = /href="#" aria-label="Facebook"/g;

files.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    let updated = false;

    if (instaRegex.test(content)) {
        content = content.replace(instaRegex, `href="https://www.instagram.com/_reiad_studio_typing_?igsh=bTliYml4ODdrdHp6" aria-label="Instagram" target="_blank"`);
        updated = true;
    }
    
    if (fbRegex.test(content)) {
        content = content.replace(fbRegex, `href="https://www.facebook.com/61591702178854/" aria-label="Facebook" target="_blank"`);
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(file, content);
        console.log("Updated social links in " + file);
    }
});

