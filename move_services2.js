const fs = require("fs");
let html = fs.readFileSync("about.html", "utf8");

const startServices = "  <!-- OUR COMPREHENSIVE SERVICES -->";
const endServices = "  <footer";

if (html.includes(startServices) && html.includes(endServices)) {
  const parts = html.split(startServices);
  const beforeServices = parts[0];
  const servicesAndFooter = parts[1];
  
  const subParts = servicesAndFooter.split(endServices);
  const servicesHTML = startServices + subParts[0];
  const footerHTML = endServices + subParts[1];
  
  const ctaSection = `  <!-- CTA SECTION -->\n  <section class="py-24 bg-[#f4f6f9] border-y border-gray-200">`;
  const ctaSectionFallback = `<section class="py-24 bg-[#f4f6f9] border-y border-gray-200">`;
  
  const target = html.includes(ctaSection) ? ctaSection : (html.includes(ctaSectionFallback) ? ctaSectionFallback : null);
  
  if (target && beforeServices.includes(target)) {
    let newHtml = beforeServices + footerHTML;
    newHtml = newHtml.replace(target, servicesHTML + "\n\n" + target);
    fs.writeFileSync("about.html", newHtml);
    console.log("Moved services section");
  } else {
    console.log("Could not find CTA section. Target: " + target);
  }
} else {
  console.log("Could not find services section");
}

