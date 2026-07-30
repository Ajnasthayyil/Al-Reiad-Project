const fs = require('fs');
const path = require('path');

const headerRegex = /<a href="index\.html" class="flex items-center gap-3">[\s\S]*?<span class="w-12 h-12 rounded-lg bg-\[#111111\] flex items-center justify-center shrink-0">[\s\S]*?<span class="font-(sans|display) text-white text-2xl font-bold">A<\/span>[\s\S]*?<\/span>[\s\S]*?<span class="flex flex-col leading-none">[\s\S]*?<span class="font-(sans|display) text-\[#111111\] text-xl font-bold tracking-tight">AL REIAD<\/span>[\s\S]*?<span class="font-(sans|display) text-\[#111111\] text-\[10px\] uppercase font-bold tracking-widest mt-1">Typing & Studio Services<\/span>[\s\S]*?<\/span>[\s\S]*?<\/a>/g;

const headerReplacement = `<a href="index.html" class="flex items-center gap-3">\n      <img src="images/logo.jpeg" alt="AL REIAD Logo" class="h-14 w-auto object-contain rounded-lg">\n    </a>`;

const footerRegex = /<div class="flex items-center gap-3 mb-6">[\s\S]*?<span class="w-10 h-10 rounded-lg bg-\[#111111\] flex items-center justify-center shrink-0">[\s\S]*?<span class="font-(sans|display) text-white text-lg font-bold">A<\/span>[\s\S]*?<\/span>[\s\S]*?<span class="font-(sans|display) text-\[#111111\] text-base font-bold tracking-tight">AL REIAD <br><span class="text-\[9px\] uppercase tracking-widest">Typing &amp; Studio Services<\/span><\/span>[\s\S]*?<\/div>/g;

const footerReplacement = `<div class="flex items-center gap-3 mb-6">\n        <img src="images/logo.jpeg" alt="AL REIAD Logo" class="h-12 w-auto object-contain rounded-lg">\n      </div>`;

fs.readdirSync('.').filter(f => f.endsWith('.html')).forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(headerRegex, headerReplacement);
    content = content.replace(footerRegex, footerReplacement);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
});
