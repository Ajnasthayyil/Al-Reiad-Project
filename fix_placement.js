const fs = require("fs");
let html = fs.readFileSync("about.html", "utf8");

const startServices = "    <!-- OUR COMPREHENSIVE SERVICES -->";
// Let us use string index to locate exactly where it is.
const idxStart = html.indexOf("    <!-- OUR COMPREHENSIVE SERVICES -->");
if (idxStart === -1) {
    const idxStartAlt = html.indexOf("  <!-- OUR COMPREHENSIVE SERVICES -->");
    if (idxStartAlt !== -1) {
        // found it
    }
}

// Let us just split by the exact tag cloud content since we know what it looks like.
const tagCloudStart = `  <!-- OUR COMPREHENSIVE SERVICES -->`;
const tagCloudEnd = `  </section>\n\n\n\n<section class="py-24 bg-[#f4f6f9] border-y border-gray-200">`; // it is followed by the commitment to excellence

const parts = html.split("  <!-- OUR COMPREHENSIVE SERVICES -->");
if (parts.length > 1) {
    // The second part starts with the section, ends with </section>
    const subParts = parts[1].split("</section>");
    const servicesContent = "  <!-- OUR COMPREHENSIVE SERVICES -->" + subParts[0] + "</section>\n\n";
    
    // Remove the services block from where it currently is
    const withoutServices = parts[0] + subParts.slice(1).join("</section>").trimStart();
    
    // Now find the exact CTA section using a unique string
    const ctaString = `<h2 class="font-sans text-3xl sm:text-4xl font-bold text-[#111111]">Need Professional Typing or Government`;
    
    // Let us find the <section> tag that wraps the CTA string
    const sectionTag = `<section class="py-24 bg-[#f4f6f9] border-y border-gray-200">`;
    
    // Split the document into blocks by <section
    const docParts = withoutServices.split("<section");
    
    let finalParts = [];
    for (let i = 0; i < docParts.length; i++) {
        if (docParts[i].includes("Need Professional Typing or Government")) {
            // This is the CTA block!
            // We want to insert the services block right before this <section
            finalParts.push(servicesContent + "<section" + docParts[i]);
        } else {
            finalParts.push(docParts[i]);
        }
    }
    
    fs.writeFileSync("about.html", finalParts.join("<section"));
    console.log("Moved services to right above the CTA");
} else {
    console.log("Could not find services tag cloud");
}

