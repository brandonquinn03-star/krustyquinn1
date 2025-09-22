# Pizza Drop — Starter Kit

A minimal starter for your limited-drop pizza business:
- **Next.js (App Router) + TypeScript**
- **Tailwind CSS** for sleek UI
- Mock **API routes** for inventory/reservations
- Ready-to-wire **Stripe** checkout and **Supabase** (auth + DB)

> Demo uses in-memory data so you can run it immediately. Swap the mock store with Supabase using `schema.sql`.

## Quick Start
1. Ensure Node 18+ is installed.
2. Run:
   ```bash
   npm install
   npm run dev
   ```
3. Visit http://localhost:3000

## Structure
- `app/` — pages (Home, Order, Checkout, Admin)
- `app/api/*` — mock endpoints (inventory, reserve, slots)
- `lib/` — shared utilities
- `schema.sql` — Supabase Postgres schema
- `STRIPE.md` — how to hook Stripe
- `SUPABASE.md` — how to hook Supabase

## Core Flows
- Orders open at **12:00 PM** local time until sold out.
- Select 1 of **two weekly pies**, pick a **pickup slot** (5–8 PM), pay.
- Inventory decrements live; sold‑out state locks the button.

## Next Steps
- Replace the mock store with Supabase (run `schema.sql`).
- Add Apple Pay/Google Pay via Stripe Payment Element.
- Turn on Push/SMS with OneSignal or Twilio (optional).
- Ship a React Native app using the same endpoints (guide in `MOBILE.md`).

