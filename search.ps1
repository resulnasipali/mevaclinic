$dirs = @("C:\Users\Lenovo\Desktop", "C:\Users\Lenovo\Downloads", "C:\Users\Lenovo\Pictures", "C:\Users\Lenovo\.gemini\antigravity\scratch")

foreach ($d in $dirs) {
    if (Test-Path $d) {
        Write-Host "Searching in $d"
        Get-ChildItem -Path $d -Recurse -ErrorAction SilentlyContinue | Where-Object { $_.Name -match "(?i)hotel|hospital|vip" } | Select-Object FullName
    }
}
