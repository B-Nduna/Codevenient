# Codevenient Consulting + Store

Integrated React + Vite company site and ecommerce-style digital systems catalogue.

## Run

```bash
npm install
npm run dev
```

With the configured GitHub Pages base, Vite may serve the local project at:
`http://localhost:5173/`

## Production

```bash
npm run build
npm run deploy
```

## Store routes
- `/store`
- `/store/:id`
- `/custom-build`
- `/checkout`

## Current commerce model
Checkout intentionally creates a project order and opens WhatsApp rather than collecting money. This lets the storefront work immediately while payment processing, protected downloads and backend order management are added later.

## Persistence
Cart and saved systems use `localStorage`.

## GitHub Pages
`public/404.html` redirects deep SPA links back into the app so routes such as `/store/bloom-commerce` can recover on refresh.

## Revision 04.1

- Store cart and saved-system controls now appear only on Store/product/checkout routes.
- Main consultancy navigation stays clean on Home/About/Careers/Custom Build.
- Restored the “Companies we've worked with” section before Contact.
- Homepage ready-system cards now act as previews only; saving happens inside the Store.

## Product imagery (R04.2)
Real project previews are now wired into the catalogue and product-detail hero for:
- Legal Executive
- Sentinel
- Bloom Commerce
- INK Studio
- FORM
- Motorhaus
- ANVIL

Products without supplied artwork (Legal Docket, Bereka Market, Drive Pro) automatically retain the drafting-style schematic visual until a real preview is added. Add an optimized image to `public/products/` and set the product's `image` field in `src/data/products.js`.

## R04.3 visual completion
Generated Codevenient-spec product covers have been added for Legal Docket, Bereka Market, and Drive Pro. All listed store systems now render with a visual product preview instead of schematic fallback cards.


## Launch hardening (Rev. 05)

- Separate Privacy Policy and Terms & Conditions pages
- Consent-gated Google Analytics via `VITE_GA_MEASUREMENT_ID`
- No frontend secrets: only public Vite configuration belongs in `.env`
- HTTPS redirect for non-local HTTP visits; GitHub Pages should also have Enforce HTTPS enabled
- Dynamic titles, descriptions, canonical, Open Graph and Twitter metadata
- Social preview, favicon, web manifest, sitemap and robots.txt
- Lazy-loaded product thumbnails plus optimized WebP product images
- Form validation, honeypots and minimum-submit-time spam friction
- Custom SPA 404 and GitHub Pages deep-route recovery
- Consultation Corner added to the Store

For real server-side forms, payments or protected downloads, secrets and spam verification must live in a backend/serverless function rather than this Vite client.


## Custom domain

Production domain: `https://codevenient.co.za`

- Vite builds from `/` because the site now lives at the domain root.
- `public/CNAME` preserves the apex domain in branch-based deployments.
- Canonical, Open Graph, sitemap and robots URLs use `https://codevenient.co.za`.
- Configure GitHub Pages Custom domain as `codevenient.co.za`, DNS A records to GitHub Pages, and `www` as a CNAME to `B-Nduna.github.io`.
