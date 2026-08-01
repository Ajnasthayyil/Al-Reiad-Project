const fs = require("fs");
const files = ["index.html", "about.html", "services.html", "contact.html", "gallery.html"];

let filesUpdated = 0;

files.forEach(file => {
    let html = fs.readFileSync(file, "utf8");
    let originalHtml = html;
    
    // Replace the specific heading size class
    // From: text-4xl sm:text-5xl
    // To: text-3xl sm:text-4xl
    html = html.replace(/text-4xl sm:text-5xl/g, "text-3xl sm:text-4xl");
    
    // Also, the testimonial one is: text-4xl sm:text-5xl lg:text-6xl
    // Let us make it: text-3xl sm:text-4xl lg:text-5xl
    html = html.replace(/text-4xl sm:text-5xl lg:text-6xl/g, "text-3xl sm:text-4xl lg:text-5xl");
    
    if (html !== originalHtml) {
        fs.writeFileSync(file, html);
        console.log("Updated headings in " + file);
        filesUpdated++;
    }
});

if(filesUpdated === 0) {
    console.log("No files updated.");
}

