const fs = require("fs");
let content = fs.readFileSync("services.html", "utf8");

const headStart = content.indexOf("<head>");
const headEnd = content.indexOf("</head>") + 7;
const head = content.substring(headStart, headEnd);

const headerStart = content.indexOf("<header");
const headerEnd = content.indexOf("</header>") + 9;
const header = content.substring(headerStart, headerEnd);

const footerStart = content.indexOf("<footer");
const footerEnd = content.indexOf("</footer>") + 9;
const footer = content.substring(footerStart, footerEnd);

fs.writeFileSync("head.txt", head);
fs.writeFileSync("header.txt", header);
fs.writeFileSync("footer.txt", footer);

