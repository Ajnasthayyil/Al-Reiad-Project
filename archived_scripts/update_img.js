const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");
const target = `<img src="images/logo.jpeg" alt="AL REIAD Logo" class="h-24 w-auto object-contain mx-auto lg:mx-0 opacity-90 rounded-lg shadow-sm">`;
const replacement = `<img src="images/reiadtyping.jpeg" alt="AL REIAD Typing Services" class="w-full max-w-[400px] h-auto object-cover mx-auto lg:mx-0 rounded-3xl shadow-[0_20px_50px_-20px_rgba(29,39,87,0.3)] border-4 border-white">`;
if (html.includes(target)) {
    html = html.replace(target, replacement);
    fs.writeFileSync("index.html", html);
    console.log("Replaced image successfully");
} else {
    console.log("Target not found. Looking for logo.jpeg...");
    const regex = /<img src="images\/logo\.jpeg"[^>]*>/g;
    const match = html.match(regex);
    if (match) {
        console.log("Found matches: ", match);
        // Replace only in the testimonials section
        const sectionMatch = html.match(/Client Stories[\s\S]*?What our clients[\s\S]*?(<img[^>]*>)/);
        if (sectionMatch) {
            html = html.replace(sectionMatch[1], replacement);
            fs.writeFileSync("index.html", html);
            console.log("Replaced via regex");
        }
    } else {
        console.log("Could not find logo.jpeg at all");
    }
}
