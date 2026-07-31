const fs = require("fs");

function fixIcons(file) {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, "utf8");
    let changed = false;
    
    // Pattern to find: bg-[#111111]/20 ... text-[#111111]
    // or similar patterns for feature icons
    if (html.includes("bg-[#111111]/20") && html.includes("text-[#111111]")) {
        html = html.replace(/bg-\[#111111\]\/20(.*?)text-\[#111111\]/g, "bg-[#c89f45]/15$1text-[#c89f45]");
        changed = true;
    }
    
    if (changed) {
        fs.writeFileSync(file, html);
        console.log("Updated " + file);
    }
}

fixIcons("about.html");
fixIcons("services.html");
fixIcons("index.html");
fixIcons("contact.html");
fixIcons("team.html");
fixIcons("gallery.html");


