/*
  # Create Admin Login Verification Function

  1. New Functions
    - `verify_admin_login` - Verifies admin credentials and returns user data if valid

  2. Security
    - Function is accessible to anon users (needed for login)
    - Uses crypt to securely compare password hashes
*/

-- Create function to verify admin login
CREATE OR REPLACE FUNCTION verify_admin_login(p_username text, p_password text)
RETURNS TABLE (
  id uuid,
  username text,
  created_at timestamptz
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    au.id,
    au.username,
    au.created_at
  FROM admin_users au
  WHERE au.username = p_username
    AND au.password_hash = crypt(p_password, au.password_hash);
END;
$$;

-- Grant execute permission to anon users (needed for login page)
GRANT EXECUTE ON FUNCTION verify_admin_login(text, text) TO anon;
GRANT EXECUTE ON FUNCTION verify_admin_login(text, text) TO authenticated;
