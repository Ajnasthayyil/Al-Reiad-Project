const fs = require("fs");
let html = fs.readFileSync("about.html", "utf8");

// The services section we added earlier starts with:
// <!-- OUR COMPREHENSIVE SERVICES -->
// and ends right before <footer

const startServices = "  <!-- OUR COMPREHENSIVE SERVICES -->";
const endServices = "  <footer";

if (html.includes(startServices) && html.includes(endServices)) {
  const parts = html.split(startServices);
  const beforeServices = parts[0];
  const servicesAndFooter = parts[1];
  
  const subParts = servicesAndFooter.split(endServices);
  const servicesHTML = startServices + subParts[0];
  const footerHTML = endServices + subParts[1];
  
  // Now we need to find where to insert it.
  // The CTA section is:
  // <!-- CTA SECTION -->
  // or something with "Need Professional Typing or Government Services?"
  const ctaSection = `<section class="py-24 bg-[#111111] relative overflow-hidden">`;
  
  if (beforeServices.includes(ctaSection)) {
    // We remove it from the bottom
    let newHtml = beforeServices + footerHTML;
    
    // And insert it right before the CTA section
    newHtml = newHtml.replace(ctaSection, servicesHTML + "\n\n  " + ctaSection);
    
    fs.writeFileSync("about.html", newHtml);
    console.log("Moved services section");
  } else {
    console.log("Could not find CTA section");
  }
} else {
  console.log("Could not find services section");
}

