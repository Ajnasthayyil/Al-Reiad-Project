const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");

let updated = false;

if (html.includes("opacity-40 filter grayscale")) {
    html = html.replace("opacity-40 filter grayscale", "opacity-30 filter grayscale");
    updated = true;
}

if (html.includes("from-[#111111]/95 via-[#111111]/60 to-[#111111]/10")) {
    html = html.replace("from-[#111111]/95 via-[#111111]/60 to-[#111111]/10", "from-[#111111]/95 via-[#111111]/75 to-[#111111]/10");
    updated = true;
}

if (updated) {
    fs.writeFileSync("index.html", html);
    console.log("Adjusted gradient slightly darker.");
} else {
    console.log("Could not find the target strings.");
}

