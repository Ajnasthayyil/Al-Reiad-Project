const fs = require("fs");
let content = fs.readFileSync("services.html", "utf8");
let oldString = `block bg-[#faeaeb] border border-[#d62839]/60 rounded-xl py-6 px-4 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:bg-gradient-to-r hover:from-[#c2a2b7] hover:to-[#eb9faa] transition-all duration-300 group`;
let newString = `block bg-white border border-gray-200 rounded-xl py-6 px-4 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:bg-[#111111] hover:border-[#111111] transition-all duration-300 group`;
content = content.split(oldString).join(newString);

let oldSpan = `class="font-bold text-[#111111] text-[15px] group-hover:text-black"`;
let newSpan = `class="font-bold text-[#111111] text-[15px] group-hover:text-[#c89f45] transition-colors"`;
content = content.split(oldSpan).join(newSpan);

fs.writeFileSync("services.html", content);

