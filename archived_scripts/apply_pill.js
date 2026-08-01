const fs = require("fs");

const targetClass1 = `class="inline-flex items-center gap-2 mb-4"`;
const replaceClass1 = `class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold text-[#111111] mb-6 tracking-widest uppercase"`;

const targetClass2 = `class="inline-flex items-center gap-2 mb-4 justify-center"`;
const replaceClass2 = `class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold text-[#111111] mb-6 tracking-widest uppercase justify-center"`;

// Note: index.html has some other ones:
const targetClass3 = `class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#fdf8ee] border border-[#f6eec3] text-xs font-bold text-[#111111] mb-6 tracking-widest uppercase"`;
const replaceClass3 = replaceClass1;

const files = fs.readdirSync(".")
  .filter(f => f.endsWith(".html"));

for (const file of files) {
  let html = fs.readFileSync(file, "utf8");
  html = html.split(targetClass1).join(replaceClass1);
  html = html.split(targetClass2).join(replaceClass2);
  html = html.split(targetClass3).join(replaceClass3);
  fs.writeFileSync(file, html);
  console.log(`Updated ${file}`);
}

