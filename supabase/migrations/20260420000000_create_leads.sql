CREATE TABLE IF NOT EXISTS leads (
  id bigserial PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  project_type text NOT NULL,
  address text,
  notes text,
  photo_urls text[]
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);
