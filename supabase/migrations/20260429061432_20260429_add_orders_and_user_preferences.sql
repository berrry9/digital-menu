/*
  # Add Orders and User Preferences Tables

  1. New Tables
    - `orders`
      - `id` (uuid, primary key)
      - `guest_name` (text)
      - `room_number` (text)
      - `items` (jsonb) - order line items
      - `total_price` (numeric)
      - `status` (text) - pending, completed, cancelled
      - `special_requests` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `user_preferences`
      - `id` (uuid, primary key)
      - `room_number` (text, unique)
      - `preferred_language` (text) - language code (en, am, om, ti, fr, de, ar)
      - `theme_preference` (text) - light or dark
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Public can insert/read orders
    - Public can read/update user preferences by room number
*/

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  guest_name text NOT NULL,
  room_number text NOT NULL,
  items jsonb NOT NULL DEFAULT '[]',
  total_price numeric NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'pending',
  special_requests text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can insert orders"
  ON orders
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Public can view orders"
  ON orders
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can update orders"
  ON orders
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_orders_room_number ON orders(room_number);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);

-- Create user_preferences table
CREATE TABLE IF NOT EXISTS user_preferences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_number text UNIQUE NOT NULL,
  preferred_language text DEFAULT 'en',
  theme_preference text DEFAULT 'light',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can insert user preferences"
  ON user_preferences
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Public can view user preferences"
  ON user_preferences
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can update user preferences"
  ON user_preferences
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_user_preferences_room_number ON user_preferences(room_number);
