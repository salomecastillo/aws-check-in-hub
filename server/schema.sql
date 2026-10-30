create table if not exists users (
  id uuid primary key,
  email text not null unique,
  full_name text not null,
  role text not null check (role in ('Admin', 'Recruiter', 'Front Desk')),
  recruiter_name text,
  created_at timestamptz not null default now()
);

create table if not exists visitors (
  id uuid primary key,
  first_name text not null,
  last_name text not null,
  phone text not null,
  email text not null,
  preferred_language text not null,
  applicant_type text not null,
  created_at timestamptz not null default now()
);

create table if not exists checkins (
  id uuid primary key,
  visitor_id uuid not null references visitors(id) on delete cascade,
  visit_focus text not null,
  visit_focus_other text,
  staff_member text,
  status text not null check (status in ('Waiting', 'Seen', 'In Progress', 'Completed', 'No-Show')),
  consent boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists audit_log (
  id uuid primary key,
  actor_id uuid references users(id),
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_checkins_created_at on checkins(created_at desc);
create index if not exists idx_checkins_status on checkins(status);
