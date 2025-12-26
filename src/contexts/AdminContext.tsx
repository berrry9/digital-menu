import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdminUser, getAdminUser, logoutAdmin } from '../utils/auth';

interface AdminContextType {
  admin: AdminUser | null;
  setAdmin: (admin: AdminUser | null) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [admin, setAdmin] = useState<AdminUser | null>(null);

  useEffect(() => {
    const stored = getAdminUser();
    if (stored) {
      setAdmin(stored);
    }
  }, []);

  const logout = () => {
    logoutAdmin();
    setAdmin(null);
  };

  return (
    <AdminContext.Provider value={{
      admin,
      setAdmin,
      logout,
      isAuthenticated: admin !== null
    }}>
      {children}
    </AdminContext.Provider>
  );
};
