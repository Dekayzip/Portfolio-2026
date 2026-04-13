# Run Next.js dev server using RStudio's bundled Node.js
$env:PATH = 'C:\Program Files\RStudio\resources\app\bin\node;' + $env:PATH
Set-Location $PSScriptRoot
& 'C:\Program Files\RStudio\resources\app\bin\node\node.exe' 'C:\Users\dhara\AppData\Local\Temp\npm_bootstrap\npm_pkg\package\bin\npm-cli.js' run dev
