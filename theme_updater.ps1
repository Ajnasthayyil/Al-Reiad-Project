$files = @('index.html', 'about.html', 'services.html', 'gallery.html', 'contact.html')
foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        $content = $content -replace 'bg-deskly-surface', 'bg-[#f4f6f9]'
        $content = $content -replace 'bg-deskly-ink/80', 'bg-[#1d2757]/80'
        $content = $content -replace 'bg-deskly-ink/50', 'bg-[#1d2757]/50'
        $content = $content -replace 'bg-deskly-ink/10', 'bg-[#1d2757]/10'
        $content = $content -replace 'bg-deskly-ink', 'bg-[#1d2757]'
        $content = $content -replace 'text-deskly-ink', 'text-[#1d2757]'
        $content = $content -replace 'text-deskly-text', 'text-gray-600'
        $content = $content -replace 'border-deskly-border', 'border-gray-200'
        $content = $content -replace 'bg-deskly-lime', 'bg-[#1d2757]'
        $content = $content -replace 'text-deskly-lime', 'text-[#1d2757]'
        $content = $content -replace 'border-deskly-lime', 'border-[#1d2757]'
        $content = $content -replace 'hover:bg-deskly-lime-hover', 'hover:bg-blue-900'
        $content = $content -replace 'hover:text-deskly-lime', 'hover:text-blue-700'
        $content = $content -replace 'focus:border-deskly-lime', 'focus:border-[#1d2757]'
        $content = $content -replace 'focus:ring-deskly-lime', 'focus:ring-[#1d2757]'
        $content = $content -replace 'shadow-\[0_0_20px_rgba\(196,240,50,0\.3\)\]', 'shadow-md'
        $content = $content -replace 'shadow-\[0_0_15px_rgba\(196,240,50,0\.4\)\]', 'shadow-md'
        $content = $content -replace 'rounded-tl-\[.*?\]', 'rounded'
        $content = $content -replace 'rounded-tr-\[.*?\]', 'rounded'
        $content = $content -replace 'rounded-bl-\[.*?\]', 'rounded'
        $content = $content -replace 'rounded-br-\[.*?\]', 'rounded'
        $content = $content -replace 'rounded-\[2rem\]', 'rounded'
        $content = $content -replace 'rounded-\[2\.5rem\]', 'rounded'
        $content = $content -replace 'font-display', 'font-sans'
        $content = $content -replace 'font-body', 'font-sans'
        Set-Content -Path $file -Value $content -Encoding UTF8
        Write-Output "Updated $file"
    }
}
