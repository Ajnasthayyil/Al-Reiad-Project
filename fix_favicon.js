const fs = require("fs");

function addFavicon(file) {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, "utf8");
    
    // Check if favicon already exists
    if (!html.includes("rel=\"icon\"")) {
        html = html.replace("</head>", "  <link rel=\"icon\" href=\"images/logo1.png\" type=\"image/png\">\n</head>");
        fs.writeFileSync(file, html);
        console.log("Added favicon to " + file);
    }
}

addFavicon("index.html");
addFavicon("about.html");
addFavicon("services.html");
addFavicon("service-details.html");
addFavicon("contact.html");
addFavicon("gallery.html");
addFavicon("team.html");


