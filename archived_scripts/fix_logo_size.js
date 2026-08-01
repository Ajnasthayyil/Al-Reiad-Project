const fs = require("fs");
const files = ["index.html", "about.html", "services.html", "gallery.html", "team.html", "contact.html"];
const oldHeaderClass = `class="h-14 w-auto object-contain rounded-lg"`;
const newHeaderClass = `class="h-20 lg:h-24 w-auto object-contain py-2 scale-110 origin-left"`;
const oldFooterClass = `class="h-12 w-auto object-contain rounded-lg"`;
const newFooterClass = `class="h-20 lg:h-24 w-auto object-contain scale-110 origin-left"`;

files.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    let updated = false;

    if (content.includes(oldHeaderClass)) {
        content = content.split(oldHeaderClass).join(newHeaderClass);
        updated = true;
    }

    if (content.includes(oldFooterClass)) {
        content = content.split(oldFooterClass).join(newFooterClass);
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(file, content);
        console.log("Updated logo size in " + file);
    }
});

