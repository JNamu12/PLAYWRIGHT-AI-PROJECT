# Push to both repositories
# Usage: .\push-to-all.ps1 -message "Your commit message"

param(
    [string]$message = "Update Playwright AI Project"
)

Write-Host "Adding all changes..." -ForegroundColor Cyan
git add .

Write-Host "Committing with message: '$message'" -ForegroundColor Cyan
git commit -m $message

Write-Host "Pushing to origin (Playwright_AI_Projects)..." -ForegroundColor Green
git push -u origin master

Write-Host "Pushing to playwright-ai-project..." -ForegroundColor Green
git push -u playwright-ai-project master

Write-Host "✅ Successfully pushed to both repositories!" -ForegroundColor Yellow
