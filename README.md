# Ben Westin portfolio

Personal portfolio for job applications. Plain HTML, CSS, and JavaScript: no build step.
The freelance business site (Westin Vision) lives in its own folder and repo.

## Edit content

Almost everything you'll change is in `content.js`:

- `featured`: the video at the top. Swap in your reel when it's on YouTube.
- `projects`: one card per project. Keep `role` specific (what you shot, edited, colored, mixed).
  A blank project template is commented out at the bottom of the list.
- `shorts`: vertical clips. YouTube IDs play on the page; Instagram links open in a new tab.

Experience, About, and Contact text are in `index.html`. Update `assets/Ben-Westin-Resume.pdf`
whenever the resume changes (keep the same filename so links don't break).

## Publish on GitHub Pages

1. Create a new GitHub repository (for example `ben-westin-portfolio`) and push this folder to `main`.
2. In the repo: Settings → Pages → Build and deployment → Source: **GitHub Actions**.
3. Every push to `main` redeploys.

## Custom domain (optional)

1. Buy the domain (e.g. benwestin.com).
2. Add a file named `CNAME` in this folder containing just the domain, e.g. `benwestin.com`.
3. At your registrar, point the domain at GitHub Pages (Settings → Pages shows the DNS records).
4. In `index.html`, change the `og:image` tag to the full URL, e.g. `https://benwestin.com/assets/og-image.jpg`.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
