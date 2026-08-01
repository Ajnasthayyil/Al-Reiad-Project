const fs = require("fs");
let html = fs.readFileSync("gallery.html", "utf8");

html = html.replace(`src="Image.jpeg" alt="Gallery Image 1"`, `src="images/office1.jpeg" alt="AL REIAD Office 1"`);
html = html.replace(`src="image2.jpeg" alt="Gallery Image 2"`, `src="images/office2.jpeg" alt="AL REIAD Office 2"`);
html = html.replace(`src="Image.jpeg" alt="Gallery Image 3"`, `src="images/office3.jpeg" alt="AL REIAD Office 3"`);
html = html.replace(`src="image2.jpeg" alt="Gallery Image 4"`, `src="images/office1.jpeg" alt="AL REIAD Office 4"`);
html = html.replace(`src="Image.jpeg" alt="Gallery Image 5"`, `src="images/office2.jpeg" alt="AL REIAD Office 5"`);
html = html.replace(`src="image2.jpeg" alt="Gallery Image 6"`, `src="images/office3.jpeg" alt="AL REIAD Office 6"`);

fs.writeFileSync("gallery.html", html);
console.log("Updated gallery images");

