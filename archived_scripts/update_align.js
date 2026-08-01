const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");
const target = `grid lg:grid-cols-2 gap-16 items-center`;
const replacement = `grid lg:grid-cols-2 gap-16 items-start`;
if (html.includes(target)) {
    // Only replace the one in testimonials
    const sectionMatch = html.match(/<!-- TESTIMONIALS -->[\s\S]*?(grid lg:grid-cols-2 gap-16 items-center)/);
    if(sectionMatch) {
       html = html.replace(sectionMatch[1], replacement);
       fs.writeFileSync("index.html", html);
       console.log("Replaced items-center with items-start");
    }
}

