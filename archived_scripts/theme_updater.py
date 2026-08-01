import os
import re

files_to_update = ['index.html', 'about.html', 'services.html', 'gallery.html', 'contact.html']

for filename in files_to_update:
    if not os.path.exists(filename):
        continue
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Color replacements
    content = content.replace('bg-deskly-surface', 'bg-[#f4f6f9]')
    content = content.replace('bg-deskly-ink', 'bg-[#1d2757]')
    content = content.replace('bg-deskly-ink/80', 'bg-[#1d2757]/80')
    content = content.replace('bg-deskly-ink/50', 'bg-[#1d2757]/50')
    content = content.replace('bg-deskly-ink/10', 'bg-[#1d2757]/10')
    content = content.replace('text-deskly-ink', 'text-[#1d2757]')
    content = content.replace('text-deskly-text', 'text-gray-600')
    content = content.replace('border-deskly-border', 'border-gray-200')
    content = content.replace('bg-deskly-lime', 'bg-[#1d2757]')
    content = content.replace('text-deskly-lime', 'text-[#1d2757]')
    content = content.replace('border-deskly-lime', 'border-[#1d2757]')
    content = content.replace('hover:bg-deskly-lime-hover', 'hover:bg-blue-900')
    content = content.replace('hover:text-deskly-lime', 'hover:text-blue-700')
    content = content.replace('focus:border-deskly-lime', 'focus:border-[#1d2757]')
    content = content.replace('focus:ring-deskly-lime', 'focus:ring-[#1d2757]')
    content = content.replace('shadow-[0_0_20px_rgba(196,240,50,0.3)]', 'shadow-md')
    content = content.replace('shadow-[0_0_15px_rgba(196,240,50,0.4)]', 'shadow-md')
    
    # Remove excessive rounded corners
    content = re.sub(r'rounded-tl-\[.*?\]', 'rounded', content)
    content = re.sub(r'rounded-tr-\[.*?\]', 'rounded', content)
    content = re.sub(r'rounded-bl-\[.*?\]', 'rounded', content)
    content = re.sub(r'rounded-br-\[.*?\]', 'rounded', content)
    content = re.sub(r'rounded-\[2rem\]', 'rounded', content)
    content = re.sub(r'rounded-\[2\.5rem\]', 'rounded', content)
    
    # Typography
    content = content.replace('font-display', 'font-sans')
    content = content.replace('font-body', 'font-sans')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {filename}")
