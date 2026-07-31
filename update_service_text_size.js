const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");

html = html.split(`class="text-gray-700 font-medium text-lg"`).join(`class="text-gray-700 font-medium text-[15px]"`);

fs.writeFileSync("index.html", html);
console.log("Updated service text size");

