const fs = require("fs");
let html = fs.readFileSync("team.html", "utf8");

// Widen container to allow more gap
html = html.replace(`<div class="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">`, `<div class="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">`);

// Increase gap between cards
html = html.replace(`<div class="grid md:grid-cols-3 gap-8 lg:gap-12">`, `<div class="grid md:grid-cols-3 gap-12 lg:gap-20">`);

fs.writeFileSync("team.html", html);
console.log("Increased gap between photos");

