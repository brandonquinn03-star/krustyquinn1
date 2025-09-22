# Stripe Integration (outline)
1. Create a PaymentIntent on `/api/checkout` with amount (in cents), capture method automatic.
2. Use Stripe Payment Element on `/checkout` to render Apple Pay/Google Pay.
3. On `payment_intent.succeeded` webhook, mark reservation `status=paid` and increment `sold` on the drop.

Endpoints to add:
- `POST /api/checkout` -> returns client_secret
- `POST /api/webhooks/stripe` -> handle events

Env needed:
```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```
