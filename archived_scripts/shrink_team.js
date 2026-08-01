const fs = require("fs");
let html = fs.readFileSync("team.html", "utf8");

// Shrink container from max-w-7xl to max-w-5xl
html = html.replace(`<div class="max-w-7xl mx-auto px-5 sm:px-8">`, `<div class="max-w-5xl mx-auto px-5 sm:px-8">`);

// Add max-w-sm mx-auto w-full to each card
html = html.split(`bg-white rounded-3xl p-6`).join(`bg-white rounded-3xl p-6 max-w-xs mx-auto w-full`);

fs.writeFileSync("team.html", html);
console.log("Shrunk team cards");

