/*
  # Hotel Menu Management System

  1. New Tables
    - `admin_users`
      - `id` (uuid, primary key)
      - `username` (text, unique)
      - `password_hash` (text)
      - `created_at` (timestamptz)
    
    - `categories`
      - `id` (text, primary key)
      - `name` (text)
      - `icon` (text)
      - `display_order` (integer)
      - `created_at` (timestamptz)
    
    - `menu_items`
      - `id` (text, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `image` (text)
      - `category_id` (text, foreign key)
      - `sub_category` (text)
      - `calories` (integer)
      - `volume` (text)
      - `ingredients` (text array)
      - `available` (boolean)
      - `quantity` (integer)
      - `rating` (numeric)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on all tables
    - Public can read categories and menu items
    - Only authenticated admin can modify data
*/

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read admin users for login verification"
  ON admin_users
  FOR SELECT
  TO anon
  USING (true);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id text PRIMARY KEY,
  name text NOT NULL,
  icon text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view categories"
  ON categories
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can insert categories"
  ON categories
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update categories"
  ON categories
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete categories"
  ON categories
  FOR DELETE
  TO authenticated
  USING (true);

-- Create menu_items table
CREATE TABLE IF NOT EXISTS menu_items (
  id text PRIMARY KEY,
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL DEFAULT 0,
  image text NOT NULL,
  category_id text NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  sub_category text,
  calories integer DEFAULT 0,
  volume text DEFAULT '',
  ingredients text[] DEFAULT '{}',
  available boolean DEFAULT true,
  quantity integer DEFAULT 0,
  rating numeric DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view menu items"
  ON menu_items
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can insert menu items"
  ON menu_items
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update menu items"
  ON menu_items
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete menu items"
  ON menu_items
  FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_menu_items_category ON menu_items(category_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_sub_category ON menu_items(sub_category);
CREATE INDEX IF NOT EXISTS idx_categories_display_order ON categories(display_order);
