const fs = require("fs");
const indexContent = fs.readFileSync("index.html", "utf8");
const servicesContent = fs.readFileSync("services.html", "utf8");

const servicesBlockMatch = servicesContent.match(/(<!-- SERVICES -->[\s\S]*?<\/section>)/);

if (servicesBlockMatch) {
    let block = servicesBlockMatch[1];
    // replace pt-40 pb-24 with py-28
    block = block.replace(/pt-40 pb-24 bg-\[#f4f6f9\] border-y/g, "py-28 bg-[#f4f6f9] border-t");
    
    // find where to inject in index.html
    const target = "<!-- STATS BANNER -->";
    const replacement = block + "\n\n<!-- STATS BANNER -->";
    
    if (indexContent.includes(target)) {
        const newIndex = indexContent.replace(target, replacement);
        fs.writeFileSync("index.html", newIndex);
        console.log("Successfully injected services into index.html");
    } else {
        console.log("Could not find target in index.html to inject.");
    }
} else {
    console.log("Could not find services block in services.html");
}

