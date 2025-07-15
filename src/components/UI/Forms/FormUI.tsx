import { ReactNode } from "react";

interface FormUiProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  className?: string;
}

export const FormUI = ({ onSubmit, children, className = '' }: FormUiProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`w-full max-w-lg mx-auto p-4 bg-blue-50 rounded-md shadow-md ${className}`}
    >
      {children}
    </form>
  );
};
