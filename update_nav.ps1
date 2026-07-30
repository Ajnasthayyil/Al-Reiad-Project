$files = @('index.html', 'about.html', 'services.html', 'gallery.html', 'contact.html')

foreach ($fileName in $files) {
    if (-Not (Test-Path $fileName)) { continue }
    $content = Get-Content $fileName -Raw

    # Common replacements for WhatsApp and Phone
    $content = $content -replace '<i class="fa-solid fa-phone text-sm"></i>\s*0900 0000 000', '<i class="fa-solid fa-phone text-sm"></i> +971 50 195 1302'
    $content = $content -replace '<a href="https://wa.me/"', '<a href="https://wa.me/971501951302"'

    # Fix Nav Link specifically in index.html
    if ($fileName -eq 'index.html') {
        $content = $content -replace '<nav class="hidden lg:flex items-center gap-8 font-semibold text-\[15px\] text-\[#1d2757\]">[\s\S]*?</nav>', '<nav class="hidden lg:flex items-center gap-8 font-semibold text-[15px] text-[#1d2757]">
      <a href="index.html" class="border-b-2 border-[#1d2757] pb-1">Home</a>
      <a href="about.html" class="hover:text-blue-700 transition-colors">About</a>
      <a href="services.html" class="hover:text-blue-700 transition-colors">Services</a>
      <a href="gallery.html" class="hover:text-blue-700 transition-colors">Gallery</a>
      <a href="contact.html" class="hover:text-blue-700 transition-colors">Contact</a>
    </nav>'
    }

    # Fix Nav Link specifically in about.html
    if ($fileName -eq 'about.html') {
        $content = $content -replace '<nav class="hidden lg:flex items-center gap-8 font-semibold text-\[15px\] text-\[#1d2757\]">[\s\S]*?</nav>', '<nav class="hidden lg:flex items-center gap-8 font-semibold text-[15px] text-[#1d2757]">
      <a href="index.html" class="hover:text-blue-700 transition-colors">Home</a>
      <a href="about.html" class="border-b-2 border-[#1d2757] pb-1">About</a>
      <a href="services.html" class="hover:text-blue-700 transition-colors">Services</a>
      <a href="gallery.html" class="hover:text-blue-700 transition-colors">Gallery</a>
      <a href="contact.html" class="hover:text-blue-700 transition-colors">Contact</a>
    </nav>'
    }

    # Fix Nav Link specifically in services.html
    if ($fileName -eq 'services.html') {
        $content = $content -replace '<nav class="hidden lg:flex items-center gap-8 font-semibold text-\[15px\] text-\[#1d2757\]">[\s\S]*?</nav>', '<nav class="hidden lg:flex items-center gap-8 font-semibold text-[15px] text-[#1d2757]">
      <a href="index.html" class="hover:text-blue-700 transition-colors">Home</a>
      <a href="about.html" class="hover:text-blue-700 transition-colors">About</a>
      <a href="services.html" class="border-b-2 border-[#1d2757] pb-1">Services</a>
      <a href="gallery.html" class="hover:text-blue-700 transition-colors">Gallery</a>
      <a href="contact.html" class="hover:text-blue-700 transition-colors">Contact</a>
    </nav>'
    }

    # Fix Nav Link specifically in gallery.html
    if ($fileName -eq 'gallery.html') {
        $content = $content -replace '<nav class="hidden lg:flex items-center gap-8 font-semibold text-\[15px\] text-\[#1d2757\]">[\s\S]*?</nav>', '<nav class="hidden lg:flex items-center gap-8 font-semibold text-[15px] text-[#1d2757]">
      <a href="index.html" class="hover:text-blue-700 transition-colors">Home</a>
      <a href="about.html" class="hover:text-blue-700 transition-colors">About</a>
      <a href="services.html" class="hover:text-blue-700 transition-colors">Services</a>
      <a href="gallery.html" class="border-b-2 border-[#1d2757] pb-1">Gallery</a>
      <a href="contact.html" class="hover:text-blue-700 transition-colors">Contact</a>
    </nav>'
    }

    # Fix Nav Link specifically in contact.html
    if ($fileName -eq 'contact.html') {
        $content = $content -replace '<nav class="hidden lg:flex items-center gap-8 font-semibold text-\[15px\] text-\[#1d2757\]">[\s\S]*?</nav>', '<nav class="hidden lg:flex items-center gap-8 font-semibold text-[15px] text-[#1d2757]">
      <a href="index.html" class="hover:text-blue-700 transition-colors">Home</a>
      <a href="about.html" class="hover:text-blue-700 transition-colors">About</a>
      <a href="services.html" class="hover:text-blue-700 transition-colors">Services</a>
      <a href="gallery.html" class="hover:text-blue-700 transition-colors">Gallery</a>
      <a href="contact.html" class="border-b-2 border-[#1d2757] pb-1">Contact</a>
    </nav>'
    }

    Set-Content -Path $fileName -Value $content -Encoding UTF8
}
Write-Output "Done"
