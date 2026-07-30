import glob
import re

old_block = """    <div>
      <h4 class="font-sans font-bold text-[#111111] mb-6 text-sm tracking-widest uppercase">Connect</h4>
      <div class="flex flex-col gap-3 text-sm text-gray-600 font-medium">
        <div class="flex items-center gap-3">
          <span class="text-[#111111] font-bold w-14 shrink-0">Phone:</span>
          <a href="tel:+971501951302" class="hover:text-[#111111] transition-colors">+971 50 195 1302</a>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-[#111111] font-bold w-14 shrink-0">Email:</span>
          <a href="mailto:alreiadbusiness@gmail.com" class="hover:text-[#111111] transition-colors">alreiadbusiness@gmail.com</a>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-[#111111] font-bold w-14 shrink-0">Address:</span>
          <p class="text-sm text-gray-600 leading-relaxed font-medium">Bu Mirha Street,<br>Al Salamat,<br>Al Ain, Abu Dhabi,<br>United Arab Emirates</p>
        </div>
      </div>
    </div>"""

new_block = """    <div>
      <h4 class="font-sans font-bold text-[#111111] mb-6 text-sm tracking-widest uppercase">Connect</h4>
      <div class="flex flex-col gap-5 text-sm text-gray-600 font-medium">
        <a href="tel:+971501951302" class="flex items-center gap-4 group">
          <div class="w-10 h-10 rounded-full bg-[#111111]/5 flex items-center justify-center text-[#111111] group-hover:bg-[#c89f45] group-hover:text-white transition-all duration-300 shrink-0">
            <i class="fa-solid fa-phone"></i>
          </div>
          <span class="group-hover:text-[#c89f45] transition-colors">+971 50 195 1302</span>
        </a>
        <a href="mailto:alreiadbusiness@gmail.com" class="flex items-center gap-4 group">
          <div class="w-10 h-10 rounded-full bg-[#111111]/5 flex items-center justify-center text-[#111111] group-hover:bg-[#c89f45] group-hover:text-white transition-all duration-300 shrink-0">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <span class="group-hover:text-[#c89f45] transition-colors">alreiadbusiness@gmail.com</span>
        </a>
        <div class="flex items-start gap-4 group cursor-default">
          <div class="w-10 h-10 rounded-full bg-[#111111]/5 flex items-center justify-center text-[#111111] group-hover:bg-[#c89f45] group-hover:text-white transition-all duration-300 shrink-0 mt-1">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <p class="text-sm text-gray-600 leading-relaxed font-medium group-hover:text-[#111111] transition-colors">
            Bu Mirha Street,<br>Al Salamat, Al Ain,<br>Abu Dhabi, UAE
          </p>
        </div>
      </div>
    </div>"""

for filepath in glob.glob("*.html"):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    if old_block in content:
        new_content = content.replace(old_block, new_block)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"Pattern not found in {filepath}")

