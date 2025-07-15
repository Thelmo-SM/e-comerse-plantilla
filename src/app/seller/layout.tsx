import React, { FC, ReactNode } from 'react';
import SideBarSeller from '@/features/Seller/components/SideBarSeller';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="flex w-full">
        <SideBarSeller />
        {children}
      </div>
    </div>
  );
};

export default Layout;
