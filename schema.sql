-- Supabase schema for real backend

create table if not exists pizzas (
  id uuid primary key default gen_random_uuid(),
  code text unique not null, -- 'margherita'
  name text not null,
  description text,
  price_cents integer not null default 1800,
  active boolean default true
);

create table if not exists weekly_menu (
  id uuid primary key default gen_random_uuid(),
  week_of date not null, -- monday of that week
  pie1_code text not null references pizzas(code),
  pie2_code text not null references pizzas(code)
);

create table if not exists drops (
  id uuid primary key default gen_random_uuid(),
  date date not null,
  opens_at time not null default '12:00',
  total integer not null,
  sold integer not null default 0,
  open boolean not null default true,
  constraint uniq_day unique(date)
);

create table if not exists reservations (
  id uuid primary key default gen_random_uuid(),
  drop_id uuid not null references drops(id),
  user_id uuid,
  pie_code text not null references pizzas(code),
  pickup_ts timestamptz not null,
  qty integer not null default 1,
  status text not null default 'reserved', -- reserved|paid|cancelled
  stripe_pi text
);

-- basic view for inventory
create view drop_inventory as
select d.id as drop_id, d.date, d.total, d.sold, (d.total - d.sold) as left, d.open
from drops d;
