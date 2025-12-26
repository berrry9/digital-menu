import { supabase } from '../lib/supabase';

export interface AdminUser {
  id: string;
  username: string;
  created_at: string;
}

export const loginAdmin = async (username: string, password: string): Promise<AdminUser | null> => {
  try {
    const { data, error } = await supabase.rpc('verify_admin_login', {
      p_username: username,
      p_password: password
    });

    if (error || !data || data.length === 0) {
      return null;
    }

    const adminUser = data[0];
    sessionStorage.setItem('admin_user', JSON.stringify(adminUser));
    return adminUser;
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
};

export const logoutAdmin = () => {
  sessionStorage.removeItem('admin_user');
};

export const getAdminUser = (): AdminUser | null => {
  const stored = sessionStorage.getItem('admin_user');
  if (!stored) return null;

  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

export const isAdminAuthenticated = (): boolean => {
  return getAdminUser() !== null;
};
