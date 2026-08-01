const fs = require("fs");
let content = fs.readFileSync("services.html", "utf8");

const oldClasses = "block bg-[#faeaeb] border border-[#d62839]/60 rounded-xl py-6 px-4 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:bg-gradient-to-r hover:from-[#c2a2b7] hover:to-[#eb9faa] transition-all duration-300 group";
const newClasses = "block bg-white border border-gray-200 rounded-xl py-6 px-4 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:bg-gradient-to-r hover:from-[#111111] hover:to-[#222222] hover:border-[#111111] transition-all duration-300 group relative overflow-hidden";

const oldSpan = "class=\\"font-bold text-[#111111] text-[15px] group-hover:text-black\\"";
const newSpan = "class=\\"font-bold text-[#111111] text-[15px] group-hover:text-[#c89f45] transition-colors relative z-10\\"";

if (content.includes(oldClasses)) {
    content = content.split(oldClasses).join(newClasses);
    content = content.split(oldSpan).join(newSpan);
    fs.writeFileSync("services.html", content);
    console.log("Updated service card colors successfully.");
} else {
    console.log("Could not find old classes to replace.");
}

