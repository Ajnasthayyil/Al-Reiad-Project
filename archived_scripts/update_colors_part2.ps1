$files = Get-ChildItem -Path . -Filter *.html
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace 'to-blue-900', 'to-[#c89f45]'
    $content = $content -replace 'text-blue-100', 'text-[#fdf8ee]'
    $content = $content -replace 'bg-indigo-500', 'bg-[#c89f45]'
    $content = $content -replace 'bg-blue-400/10', 'bg-[#c89f45]/10'
    $content = $content -replace 'hover:text-blue-700', 'hover:text-[#c89f45]'
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
Write-Host "Edge case colors updated"
