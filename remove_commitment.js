const fs = require("fs");
let html = fs.readFileSync("gallery.html", "utf8");

const startTag = `<section class="py-24 bg-[#f4f6f9] border-t border-gray-200">`;
const endTag = `</section>`;
const searchPhrase = `Our Commitment to You`;

let indexStart = html.indexOf(startTag);
while(indexStart !== -1) {
    let indexEnd = html.indexOf(endTag, indexStart);
    if(indexEnd !== -1) {
        const block = html.substring(indexStart, indexEnd + endTag.length);
        if(block.includes(searchPhrase)) {
            html = html.substring(0, indexStart) + html.substring(indexEnd + endTag.length);
            break;
        }
    }
    indexStart = html.indexOf(startTag, indexStart + 1);
}

fs.writeFileSync("gallery.html", html);
console.log("Removed commitment section");

