# GenHart Lab Website

Static marketing website for GenHart Lab and the Applied ML Portfolio Accelerator.

## Pages

- `index.html` — homepage
- `about.html` — founder story and programme principles
- `syllabus.html` — three-month applied ML roadmap
- `coaching.html` — coaching offer, outcomes, pricing, and application process
- `contact.html` — application form and FAQ

## Run locally

No dependencies or production build are required. From the project directory, run:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>.

You can also open `index.html` directly in a browser, although a local server is recommended.

## Project structure

- `styles.css` — shared responsive design system and animations
- `script.js` — mobile navigation, scroll reveals, and demo form behaviour
- `assets/` — website images
- `DESIGN*.md` — design research and reference notes
- `pasted-text.txt` — original website copy outline

## Current implementation notes

The application form is frontend-only and still needs a form or email backend. Video cards and founder photographs are placeholders that need final content before launch.
