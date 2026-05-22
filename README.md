# DEVOPTY Flask Site

Premium single-page marketing site for DEVOPTY built with Flask plus plain HTML, CSS, and JavaScript.

## Characteristics

- Flask runtime only
- No frontend framework
- No npm
- No build step
- No runtime dependencies
- Static deployment ready

## Structure

- `app.py` - lightweight Flask server for local and simple hosted deployment
- `index.html` - semantic single-page shell and SEO metadata
- `styles.css` - full cinematic design system and responsive layout
- `script.js` - rendering, reveal animations, counters, navigation state, and parallax
- `data/siteData.js` - all editable content in one place
- `assets/` - social preview and hero placeholder visuals
- `robots.txt` and `sitemap.xml` - search engine support
- `requirements.txt` - Python dependency list for the Flask wrapper

## Local preview

Run the site with Flask:

```bash
cd devopty_static_site
python -m pip install -r requirements.txt
python app.py
```

Then open:

```text
http://127.0.0.1:5080/
```

You can still open `index.html` directly in a browser if you want a zero-server preview.

## Deployment

You can either:

- deploy it as a simple Flask app
- or upload the static files to any static host if server-side Flask routing is not needed

Static hosting options include:

- Netlify
- Cloudflare Pages
- GitHub Pages
- Azure Static Web Apps
- Amazon S3 + CloudFront
- Any standard web server

## Content updates

Edit `data/siteData.js` to change:

- hero copy and stats
- navigation labels
- overview cards
- capability cards
- dashboard entries
- enterprise features
- use cases
- contact links

## Flask notes

- `/` serves `index.html`
- `/health` returns a small JSON health response
- all CSS, JS, image, logo, robots, and sitemap files are served directly by Flask from this folder