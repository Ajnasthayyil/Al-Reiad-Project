const fs = require("fs");
const files = ["index.html", "about.html", "services.html", "gallery.html", "team.html", "contact.html"];

const oldName = "AL REIAD TYPING & STUDIO SERVICES";
const oldNameHtml = "AL REIAD TYPING &amp; STUDIO SERVICES";
const newName = "AL REIAD STUDIO TYPING L.L.C-S.P.C";

const oldAddress1 = "Bu Mirha Street,<br>Al Salamat, Al Ain, Abu Dhabi,<br>United Arab Emirates";
const newAddress1 = "Al Salamat - Al Salamat 1,<br>Abu Dhabi,<br>United Arab Emirates";

const oldAddress2 = "Bu Mirha Street,<br>Al Salamat, Al Ain,<br>Abu Dhabi, UAE";
const newAddress2 = "Al Salamat - Al Salamat 1,<br>Abu Dhabi, UAE";

files.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    let updated = false;

    if (content.includes(oldName)) {
        content = content.split(oldName).join(newName);
        updated = true;
    }
    
    if (content.includes(oldNameHtml)) {
        content = content.split(oldNameHtml).join(newName);
        updated = true;
    }
    
    if (content.includes(oldAddress1)) {
        content = content.split(oldAddress1).join(newAddress1);
        updated = true;
    }
    
    if (content.includes(oldAddress2)) {
        content = content.split(oldAddress2).join(newAddress2);
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(file, content);
        console.log("Updated name and address in " + file);
    }
});

