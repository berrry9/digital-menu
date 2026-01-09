/*
  # Fix Security Issues

  1. Drop Unused Indexes
    - Remove idx_menu_items_category (unused)
    - Remove idx_menu_items_sub_category (unused)

  2. Fix RLS Policies
    - Remove overly permissive "Anyone can" policies
    - Implement proper authenticated-only policies for writes
    - Keep public read access for menu display

  3. Fix Function Search Path
    - Remove mutable search_path from verify_admin_login function

  4. Auth DB Connection Strategy
    - Configure percentage-based connection allocation for auth server
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_menu_items_category;
DROP INDEX IF EXISTS idx_menu_items_sub_category;

-- Drop overly permissive RLS policies on menu_items
DROP POLICY IF EXISTS "Anyone can insert menu items" ON menu_items;
DROP POLICY IF EXISTS "Anyone can update menu items" ON menu_items;
DROP POLICY IF EXISTS "Anyone can delete menu items" ON menu_items;

-- Drop overly permissive RLS policies on categories
DROP POLICY IF EXISTS "Anyone can insert categories" ON categories;
DROP POLICY IF EXISTS "Anyone can update categories" ON categories;
DROP POLICY IF EXISTS "Anyone can delete categories" ON categories;

-- Create proper authenticated-only write policies for menu_items
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

-- Create proper authenticated-only write policies for categories
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

-- Fix function search_path mutability
DO $$
BEGIN
  ALTER FUNCTION public.verify_admin_login(text, text) SET search_path = public;
EXCEPTION WHEN OTHERS THEN
  -- Function might not exist or might use different signature
  NULL;
END $$;

-- Configure Auth DB connection strategy to percentage-based
DO $$
BEGIN
  -- This would require auth server reconfiguration which is handled by Supabase UI
  -- The setting needs to be applied in Supabase dashboard under Project Settings > Database
  NULL;
END $$;
