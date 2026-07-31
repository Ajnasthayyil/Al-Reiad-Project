const fs = require("fs");

const files = ["index.html", "about.html", "services.html", "gallery.html", "team.html", "contact.html"];
const oldLogo = `src="images/logo.jpeg"`;
const newLogo = `src="images/Alreiadlogo.png"`;

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, "utf8");
        if (content.includes(oldLogo)) {
            content = content.split(oldLogo).join(newLogo);
            fs.writeFileSync(file, content);
            console.log("Updated logo in " + file);
        }
    } catch (e) {
        console.log("Error with " + file + ": " + e.message);
    }
});

