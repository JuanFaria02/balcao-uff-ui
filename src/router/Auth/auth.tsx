import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  logged: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(false);

  const login = () => setLogged(true);
  const logout = () => setLogged(false);

  return (
    <AuthContext.Provider value={{ logged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  return context;
};
