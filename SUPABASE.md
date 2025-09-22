# Supabase Integration (outline)
- Create project, paste `schema.sql` in SQL editor.
- Add tables for `pizzas`, `weekly_menu`, `drops`, `reservations`.
- Enable Email OTP auth.
- Create RLS policies:
  - `reservations`: users can insert their own reservation; read only their own.
  - `drops`: read for all; update by service role only.
- Replace mock store functions in `lib/mock-store.ts` with PostgREST calls using `@supabase/supabase-js`.
