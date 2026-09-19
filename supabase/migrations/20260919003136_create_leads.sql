create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 100),
  email text not null check (char_length(email) <= 180),
  company text check (company is null or char_length(company) <= 140),
  phone text check (phone is null or char_length(phone) <= 30),
  service text not null check (
    service in ('landing-page', 'site-institucional', 'sistema-web', 'a-definir')
  ),
  message text not null check (char_length(message) between 20 and 2000),
  source text not null default 'site-tekton' check (char_length(source) <= 80),
  user_agent text check (user_agent is null or char_length(user_agent) <= 500),
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

revoke all on table public.leads from anon, authenticated;

comment on table public.leads is
  'Contatos enviados pelo site da Tekton. Escrita exclusiva pelo endpoint de servidor.';
