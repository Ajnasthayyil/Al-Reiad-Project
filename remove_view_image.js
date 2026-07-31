const fs = require("fs");
let html = fs.readFileSync("gallery.html", "utf8");

const overlayText = `<span class="text-white font-sans font-bold tracking-wider uppercase text-sm">View Image</span>`;
html = html.split(overlayText).join("");

fs.writeFileSync("gallery.html", html);
console.log("Removed View Image text");

