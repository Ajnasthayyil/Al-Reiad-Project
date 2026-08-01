const fs = require("fs");
const files = ["index.html", "about.html", "services.html", "gallery.html", "team.html", "contact.html"];
const oldLogo = `images/Alreiadlogo.png`;
const newLogo = `images/logo1.png`;

files.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    if (content.includes(oldLogo)) {
        content = content.split(oldLogo).join(newLogo);
        fs.writeFileSync(file, content);
        console.log("Updated logo in " + file);
    }
});

