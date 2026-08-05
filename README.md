# Akash Srivastava — Portfolio

A personal portfolio site built with React, Vite, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Edit your content

Everything on the page — name, bio, skills, work experience, projects, contact
info — lives in one file:

```
src/data.js
```

Update that file and the whole site updates. You don't need to touch any
component files unless you want to change layout or styling.

## Deploy to GitHub Pages

You have two options. **Option A is recommended** — it redeploys automatically
every time you push to `main`.

### Option A: GitHub Actions (automatic)

1. Create a new repository on GitHub (e.g. `portfolio`) and push this project to it:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. On GitHub, go to your repo → **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. That's it. The workflow in `.github/workflows/deploy.yml` will build and
   publish the site automatically. Check the **Actions** tab to watch it run.
5. Your site will be live at:
   `https://<your-username>.github.io/<your-repo>/`

Every future `git push` to `main` redeploys the site automatically.

### Option B: `gh-pages` package (manual)

1. Push the project to a GitHub repo (same as step 1 above).
2. Run:

   ```bash
   npm run deploy
   ```

   This builds the site and pushes the `dist` folder to a `gh-pages` branch.
3. On GitHub, go to **Settings → Pages** → set **Source** to the `gh-pages`
   branch.
4. Your site will be live at the same URL as above within a minute or two.

## Notes

- `vite.config.js` uses `base: "./"` (relative asset paths), so the site
  works correctly whether it's served at `username.github.io/` directly or
  at `username.github.io/repo-name/` — no config changes needed either way.
- Colors, fonts, and animation tokens are defined in `tailwind.config.js` if
  you want to adjust the palette later.
