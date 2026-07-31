const fs = require("fs");

function updateFooterName(file) {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, "utf8");
    
    if (html.includes(">AIr_Tech</a>")) {
        html = html.replace(">AIr_Tech</a>", ">Airo_Tech</a>");
        fs.writeFileSync(file, html);
        console.log("Updated footer name in " + file);
    }
}

updateFooterName("index.html");
updateFooterName("about.html");
updateFooterName("services.html");
updateFooterName("service-details.html");
updateFooterName("contact.html");
updateFooterName("gallery.html");
updateFooterName("team.html");


