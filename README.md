# Nosh Stash

Our private recipe stash. Save recipes from links, captions, texts and cookbook photos, then cook, plan and shop together.

- **App:** the files in this repo, hosted free on GitHub Pages. Install it from Safari with Share → Add to Home Screen.
- **Backend:** `apps-script/Code.gs`, pasted into the Apps Script attached to the "Recipe Finder" Google Sheet. The passcode and Anthropic key live in Script Properties, never in this repo.

## What's in it
- Paste a link, caption or text, or upload a screenshot or photo, and it gets organized automatically.
- Save straight from the iPhone share button with an Apple Shortcut (set up from Settings in the app).
- Cook mode: big step-by-step view that keeps the screen on, with tap-to-start timers.
- Scale servings and switch between US and metric units.
- Meal plan by week, with the week's groceries in one tap.
- Smart grocery list: duplicates merged and sorted by store aisle.
- Kitchen journal: "We made this" with rating, notes and your own photo.
- Activity feed, collections, and "What can I make?" from what's in the fridge.
- Ask questions about any recipe, plus nutrition estimates.
- Duplicate warning, recipe sharing, and backup download.

## Updating
1. **Backend:** paste the new `Code.gs` into Apps Script and save. Then Deploy → Manage deployments → pencil → Version: **New version** → Deploy. Never use New deployment, which changes the web address.
2. **App:** upload the changed files to this repo (Add file → Upload files → Commit changes). Wait for the green check, then reopen the app.

## Files
| File | What it is |
|---|---|
| `index.html` | The whole app |
| `manifest.webmanifest` | Home-screen name, icon and colors |
| `sw.js` | Lets the app open without a connection |
| `apple-touch-icon.png`, `icon-*.png`, `favicon-32.png` | The jar icon in every size |
| `apps-script/Code.gs` | The backend (lives in Google Apps Script, not GitHub) |
