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
- `index.html` - the whole page: all content and SEO metadata
- `styles.css` - design tokens, layout and responsive rules
- `script.js` - mobile navigation, the contact form (opens the visitor's email app) and the "Book a call" links. The booking URL appears in `index.html` on each `data-booking` link and on the dialog's fallback link. Those links open the booking page in a new tab. Setting `data-embed-url` on `#booking-dialog` to an embeddable shared Bookings page makes them open the calendar in an in-page dialog instead. The personal "Bookings with me" link cannot be used for that: Microsoft only lets it be framed by its own sites.
- `assets/netopty/` - Netopty sample report pages; `assets/tools/` - tool images generated from synthetic data
- `assets/` - logo and social preview image
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

All page content is plain HTML in `index.html`. Edit the text there; there is no separate data file.

## Flask notes

- `/` serves `index.html`
- `/health` returns a small JSON health response
- all CSS, JS, image, logo, robots, and sitemap files are served directly by Flask from this folder