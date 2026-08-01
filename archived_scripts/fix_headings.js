const fs = require("fs");
let content = fs.readFileSync("index.html", "utf8");

// Fix "Why Choose AL REIAD?"
content = content.replace(
    `<h2 class="font-display text-3xl sm:text-4xl font-extrabold text-black tracking-tight">Why Choose AL\nREIAD?</h2>`, 
    `<h2 class="font-display text-[28px] sm:text-4xl font-extrabold text-black tracking-tight whitespace-nowrap">Why Choose AL REIAD?</h2>`
);
content = content.replace(
    `<h2 class="font-display text-3xl sm:text-4xl font-extrabold text-black tracking-tight">Why Choose AL \nREIAD?</h2>`, 
    `<h2 class="font-display text-[28px] sm:text-4xl font-extrabold text-black tracking-tight whitespace-nowrap">Why Choose AL REIAD?</h2>`
);
content = content.replace(
    /Why Choose AL\s+REIAD\?/g, 
    `Why Choose AL REIAD?`
);

// Fix "Our seamless process"
content = content.replace(
    `<h2 class="font-display text-3xl sm:text-4xl font-extrabold text-black tracking-tight">Our seamless\nprocess</h2>`, 
    `<h2 class="font-display text-3xl sm:text-4xl font-extrabold text-black tracking-tight whitespace-nowrap">Our seamless process</h2>`
);
content = content.replace(
    `<h2 class="font-display text-3xl sm:text-4xl font-extrabold text-black tracking-tight">Our seamless \nprocess</h2>`, 
    `<h2 class="font-display text-3xl sm:text-4xl font-extrabold text-black tracking-tight whitespace-nowrap">Our seamless process</h2>`
);
content = content.replace(
    /Our seamless\s+process/g, 
    `Our seamless process`
);

// Fix "We'd love to hear from you" color uniform + single line
// Let us add whitespace-nowrap and change the color to match the primary brand color (or text-black).
// The user says "this heading color is also make uniform". Let us make it text-[#c89f45] like a theme color, or keep text-black. 
// Wait, if it's already text-black, maybe it WASN'T uniform in their eyes? Let us just make it gradient or #c89f45.
// Let us just replace it.
const hearFromYouRegex = /<h2 class="font-display text-3xl sm:text-4xl font-extrabold text-black tracking-tight mt-2">We'd love to hear\s+from you<\/h2>/g;
content = content.replace(hearFromYouRegex, `<h2 class="font-display text-2xl sm:text-4xl font-extrabold text-[#c89f45] tracking-tight mt-2 whitespace-nowrap">We'd love to hear from you</h2>`);

// Also fix it if it's already on one line
const hearFromYouRegex2 = /<h2 class="font-display text-3xl sm:text-4xl font-extrabold text-black tracking-tight mt-2">We'd love to hear from you<\/h2>/g;
content = content.replace(hearFromYouRegex2, `<h2 class="font-display text-2xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mt-2 whitespace-nowrap">We'd love to hear from you</h2>`);

fs.writeFileSync("index.html", content);
console.log("Headings updated");

