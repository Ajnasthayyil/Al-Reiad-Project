const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");

html = html.replace("Professional Typing &<br>", "Professional Typing <br>& ");

fs.writeFileSync("index.html", html);
console.log("Updated heading.");

