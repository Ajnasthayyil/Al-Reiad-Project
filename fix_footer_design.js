const fs = require("fs");

function updateFooter(file) {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, "utf8");
    
    const target = "<p>&copy; <span data-year></span> AL REIAD STUDIO TYPING L.L.C-S.P.C. All rights reserved.</p>";
    const replacement = "<p>&copy; <span data-year></span> AL REIAD STUDIO TYPING L.L.C-S.P.C. All rights reserved. | Designed by <a href=\"https://ajnasthayyil.github.io/myportfolio/\" target=\"_blank\" class=\"text-[#c89f45] hover:text-[#111111] transition-colors font-bold\">Ajnas Thayyil</a></p>";
    
    if (html.includes(target)) {
        html = html.replace(target, replacement);
        fs.writeFileSync(file, html);
        console.log("Updated footer in " + file);
    }
}

updateFooter("index.html");
updateFooter("about.html");
updateFooter("services.html");
updateFooter("service-details.html");
updateFooter("contact.html");
updateFooter("gallery.html");
updateFooter("team.html");


