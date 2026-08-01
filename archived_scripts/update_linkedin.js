const fs = require("fs");
let html = fs.readFileSync("team.html", "utf8");

const oldLink = `<a href="#" class="w-10 h-10 rounded-full bg-white text-[#111111] flex items-center justify-center hover:bg-[#c89f45] hover:text-white transition-colors duration-300">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>`;
const newLink = `<a href="https://wa.me/971501951302" class="w-10 h-10 rounded-full bg-white text-[#111111] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors duration-300">
                <i class="fa-brands fa-whatsapp text-lg"></i>
              </a>`;

html = html.split(oldLink).join(newLink);

fs.writeFileSync("team.html", html);
console.log("Updated linkedin to whatsapp");

