const fs = require("fs");
const files = fs.readdirSync(".").filter(f => f.endsWith(".html"));

for (const file of files) {
  let html = fs.readFileSync(file, "utf8");
  
  // 1. Desktop Nav
  const targetDesktopNav = `<a href="gallery.html" class="hover:text-[#a37e32] transition-colors">Gallery</a>`;
  const activeDesktopNav = `<a href="gallery.html" class="border-b-2 border-[#111111] pb-1">Gallery</a>`;
  
  const insertTeam = `\n        <a href="team.html" class="hover:text-[#a37e32] transition-colors">Team</a>`;
  
  if (html.includes(targetDesktopNav)) {
    html = html.replace(targetDesktopNav, targetDesktopNav + insertTeam);
  } else if (html.includes(activeDesktopNav)) {
    html = html.replace(activeDesktopNav, activeDesktopNav + insertTeam);
  }
  
  // 2. Footer Nav "Quick Links"
  const targetFooterNav = `<li><a href="gallery.html" class="hover:text-[#111111] font-medium transition-colors">Gallery</a></li>`;
  const insertTeamFooter = `\n          <li><a href="team.html" class="hover:text-[#111111] font-medium transition-colors">Team</a></li>`;
  if (html.includes(targetFooterNav)) {
    html = html.replace(targetFooterNav, targetFooterNav + insertTeamFooter);
  }
  
  fs.writeFileSync(file, html);
}
console.log("Updated navigation in all HTML files");

