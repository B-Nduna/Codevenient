# Codevenient Consulting

React + Vite company site for Codevenient Consulting.

## Run

```bash
npm install
npm run dev
```

With the configured GitHub Pages base, Vite may serve the local project at:
`http://localhost:5173/Codevenient/`

## Production

```bash
npm run build
npm run deploy
```

## Main routes

- `/`
- `/about`
- `/careers`
- `/custom-build`
- `/privacy-policy`
- `/terms`

`public/404.html` redirects deep SPA links back into the app so routes such as `/Codevenient/about` can recover on refresh.

## Project enquiries

The homepage enquiry form collects a short, mostly multiple-choice project brief and then opens WhatsApp. The detailed project brief is available at `/custom-build`. Both forms are client-side and do not store or transmit submissions to a backend.

## Site operations

- Consent-gated Google Analytics via `VITE_GA_MEASUREMENT_ID`
- No frontend secrets: only public Vite configuration belongs in `.env`
- HTTPS redirect for non-local HTTP visits; GitHub Pages should also have Enforce HTTPS enabled
- Dynamic titles, descriptions, canonical, Open Graph and Twitter metadata
- Custom SPA 404 and GitHub Pages deep-route recovery
- Form validation, honeypots and minimum-submit-time spam friction

For server-side forms or spam verification, secrets and validation must live in a backend/serverless function rather than this Vite client.
