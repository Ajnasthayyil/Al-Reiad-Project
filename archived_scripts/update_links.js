const fs = require("fs");
let content = fs.readFileSync("services.html", "utf8");

// We need to replace href="#" inside the service cards.
// But we want to extract the text inside the span to generate the slug.
// We can use a regex replacement with a callback.

content = content.replace(/<a href="#" class="(block bg-white border [^>]+)">\s*<span class="([^"]+)">([^<]+)<\/span>\s*<\/a>/g, (match, classes, spanClasses, text) => {
    // create slug
    const slug = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return `<a href="service-details.html?service=${slug}" class="${classes}">
          <span class="${spanClasses}">${text}</span>
        </a>`;
});

fs.writeFileSync("services.html", content);

