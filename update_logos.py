import os
import glob
import re

html_files = glob.glob("*.html")

header_logo_pattern = re.compile(r'<a href="index\.html" class="flex items-center gap-3">\s*<span class="w-12 h-12 rounded-lg bg-\[#111111\] flex items-center justify-center shrink-0">\s*<span class="font-sans text-white text-2xl font-bold">A</span>\s*</span>\s*<span class="flex flex-col leading-none">\s*<span class="font-sans text-\[#111111\] text-xl font-bold tracking-tight">AL REIAD</span>\s*<span class="font-sans text-\[#111111\] text-\[10px\] uppercase font-bold tracking-widest mt-1">Typing & Studio Services</span>\s*</span>\s*</a>')

header_replacement = '<a href="index.html" class="flex items-center gap-3">\n      <img src="images/logo.jpeg" alt="AL REIAD Logo" class="h-14 w-auto object-contain rounded-lg">\n    </a>'

footer_logo_pattern = re.compile(r'<div class="flex items-center gap-3 mb-6">\s*<span class="w-10 h-10 rounded-lg bg-\[#111111\] flex items-center justify-center shrink-0">\s*<span class="font-sans text-white text-lg font-bold">A</span>\s*</span>\s*<span class="font-sans text-\[#111111\] text-base font-bold tracking-tight">AL REIAD <br><span class="text-\[9px\] uppercase tracking-widest">Typing &amp; Studio Services</span></span>\s*</div>')

footer_replacement = '<div class="flex items-center gap-3 mb-6">\n        <img src="images/logo.jpeg" alt="AL REIAD Logo" class="h-12 w-auto object-contain rounded-lg">\n      </div>'

for file in html_files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    content = header_logo_pattern.sub(header_replacement, content)
    content = footer_logo_pattern.sub(footer_replacement, content)
    
    with open(file, "w", encoding="utf-8") as f:
        f.write(content)
print("Logos updated!")
