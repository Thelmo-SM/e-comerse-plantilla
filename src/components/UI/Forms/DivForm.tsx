import { ReactNode } from 'react';

interface DivFormProps {
  children: ReactNode;
  className?: string;
}

export const DivForm = ({ children, className = '' }: DivFormProps) => {
  return (
    <div className={`flex flex-col gap-2 mb-4 ${className}`}>
      {children}
    </div>
  );
};
