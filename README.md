# Delta Engineering Works — Website

A Next.js (App Router) marketing + product-catalogue site for **Delta Engineering
Works**, built from the company's 2025 product brochure. Content, product specs,
office addresses, and phone numbers are pulled directly from the brochure. The
logo and product photos are cropped/extracted from the same PDF.

## Pages

- `/` — Home (hero, certifications strip, category grid, featured products, why-Delta, CTA)
- `/products` — Full catalogue with category tabs, type filter, and search
- `/products/[slug]` — Individual product page with features + technical spec table
- `/about` — Company story, vision, people power, certifications
- `/services` — Service commitments and industries served
- `/contact` — Contact form + every office address/phone number from the brochure

## Tech stack

- Next.js 15 (App Router), React 18
- Tailwind CSS (custom Delta color palette + Oswald/Inter/IBM Plex Mono fonts)
- Plain JavaScript (no TypeScript) — kept simple for easy editing
- No backend/database — product & company data lives in `/data/*.js`

## Run locally

You'll need [Node.js](https://nodejs.org) 18.18+ installed.

```bash
npm install
npm run dev
