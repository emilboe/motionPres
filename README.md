# Motion Presentation

React slide deck with one file per slide and arrow-key navigation.

## Development

```bash
npm install
npm run dev
```

## Add a slide

1. Create a new file in `src/slides/` (and optional CSS file).
2. Import it in `src/App.jsx`.
3. Add it to the `slides` array.

## Deploy to GitHub Pages

```bash
npm run deploy
```

If your site is served from a repo subpath, `vite.config.js` is already set to
`base: './'` so assets resolve correctly. If you want an explicit repo path,
update `base` to `'/your-repo-name/'`.

