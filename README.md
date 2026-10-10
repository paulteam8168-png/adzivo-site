# ADZIVO Website

Zero-dependency static site (no npm install needed) + one Cloudflare Pages Function for the contact form.
Pages: Home, Services, Case Studies, About, Contact, Privacy, Terms, 404.

## Edit content
Everything lives in `site.config.mjs` (contact details, booking URL, services, case studies, testimonials, team).
Layout and copy are in `src/pages.mjs`, styles in `src/styles.css`.

## Run locally
```
node build.mjs          # builds to dist/
npx wrangler pages dev dist   # serves site + /api/contact (copy .env.example to .dev.vars first)
```

## Deploy (GitHub -> Cloudflare Pages)
1. Push this folder to a GitHub repo.
2. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git > select repo.
3. Build command: `node build.mjs` | Build output directory: `dist` | Root directory: blank.
4. Environment variables (Settings > Variables and Secrets): see `.env.example`.
5. Save and Deploy. Add your custom domain under Custom domains, and set `SITE_URL` to it.

## Still needs configuration (honest list)
- Contact form returns "not configured" until RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL are set (Resend sender domain must be verified).
- Booking link: set `contact.bookingUrl` (otherwise the button goes to the contact form).
- Contact email/phone/location: blank on purpose, nothing invented.
- Case studies are labelled demo content; replace and set `demo:false`. Testimonials and team are hidden until added.
- Privacy and Terms are templates: get legal review and fill the bracketed parts.
- Optional: Turnstile (site key in config + TURNSTILE_SECRET) and KV binding `RATE_LIMIT` for durable rate limits; also add a Cloudflare WAF rate-limiting rule on `/api/contact`.
- FAQ answers on budget and ad-account payment are generic; confirm they match your real policy.
