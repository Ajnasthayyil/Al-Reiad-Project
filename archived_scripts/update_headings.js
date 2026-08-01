const fs = require("fs");
let content = fs.readFileSync("index.html", "utf8");

// "Your Trusted Partner in Al Ain" -> "Your Trusted Partner in <br><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#c89f45]\">Al Ain</span>"
content = content.replace(
    />Your\s*Trusted Partner in\s*Al Ain<\/h2>/i,
    `>Your Trusted Partner in <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#c89f45]">Al Ain</span></h2>`
);

// "Our seamless process" -> "Our seamless <br><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#c89f45]\">process</span>"
content = content.replace(
    />Our seamless \nprocess<\/h2>/i,
    `>Our seamless <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#c89f45]">process</span></h2>`
);
content = content.replace(
    />Our seamless\s*process<\/h2>/i,
    `>Our seamless <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#c89f45]">process</span></h2>`
);


// "Why Choose AL REIAD?" -> "Why Choose <br><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#c89f45]\">AL REIAD?</span>"
content = content.replace(
    />Why Choose AL \nREIAD\?<\/h2>/i,
    `>Why Choose <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#c89f45]">AL REIAD?</span></h2>`
);
content = content.replace(
    />Why Choose AL\s*REIAD\?<\/h2>/i,
    `>Why Choose <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#c89f45]">AL REIAD?</span></h2>`
);

fs.writeFileSync("index.html", content);
console.log("Updated headings in index.html");

