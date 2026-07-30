$files = Get-ChildItem -Path . -Filter *.html
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace '#1d2757', '#111111'
    $content = $content -replace 'bg-blue-50', 'bg-[#fdf8ee]'
    $content = $content -replace 'bg-blue-100', 'bg-[#f6eec3]'
    $content = $content -replace 'bg-blue-600', 'bg-[#c89f45]'
    $content = $content -replace 'bg-blue-900', 'bg-[#a37e32]'
    $content = $content -replace 'text-blue-600', 'text-[#c89f45]'
    $content = $content -replace 'text-blue-700', 'text-[#a37e32]'
    $content = $content -replace 'border-blue-100', 'border-[#f6eec3]'
    $content = $content -replace 'from-blue-100', 'from-[#f6eec3]'
    $content = $content -replace 'to-blue-100', 'to-[#f6eec3]'
    $content = $content -replace 'to-blue-600', 'to-[#c89f45]'
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
Write-Host "Colors updated"
