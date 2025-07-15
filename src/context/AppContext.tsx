// context/AppContext.tsx
'use client';

import React, { createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';

interface AppContextProps {
  currency: string;
  router: ReturnType<typeof useRouter>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const currency = '$'; // por ejemplo

  return (
    <AppContext.Provider value={{ currency, router }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
