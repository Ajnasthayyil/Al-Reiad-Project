const fs = require("fs");
let content = fs.readFileSync("contact.html", "utf8");

const oldStr = `<div class="space-y-4">\n            <div class="space-y-4">`;
if (content.includes(oldStr)) {
    content = content.replace(oldStr, `<div class="space-y-4">`);
    console.log("Fixed start div");
}

const badEnd = `alreiadbusiness@gmail.com\n            </p>\n            </div>`;
if (content.includes(badEnd)) {
    content = content.replace(badEnd, `alreiadbusiness@gmail.com\n            </p>`);
    console.log("Fixed end div");
}

fs.writeFileSync("contact.html", content);

