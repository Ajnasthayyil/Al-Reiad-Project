const fs = require("fs");
const files = ["index.html", "about.html", "services.html", "contact.html", "gallery.html"];

files.forEach(file => {
    let html = fs.readFileSync(file, "utf8");
    let originalHtml = html;
    
    // Replace the specific heading size class
    html = html.replace(/text-4xl lg:text-6xl/g, "text-3xl lg:text-5xl");
    
    if (html !== originalHtml) {
        fs.writeFileSync(file, html);
        console.log("Updated headings in " + file);
    }
});

