$cssFile = "style.css"
$cssContent = Get-Content $cssFile -Raw
$cssContent = $cssContent -replace '#C4F032', '#c89f45'
$cssContent = $cssContent -replace '#b5e024', '#a37e32'
$cssContent = $cssContent -replace '#0F172A', '#111111'
$cssContent = $cssContent -replace '#1E293B', '#1a1a1a'
Set-Content -Path $cssFile -Value $cssContent -Encoding UTF8

$htmlFiles = Get-ChildItem -Filter *.html
foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace '#C4F032', '#c89f45'
    $content = $content -replace '#b5e024', '#a37e32'
    $content = $content -replace '#0F172A', '#111111'
    $content = $content -replace '#1E293B', '#1a1a1a'
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
