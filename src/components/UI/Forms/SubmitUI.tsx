interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customClass?: string;
  children: React.ReactNode;
}

export const SubmitUI = ({ children, customClass = '', ...props }: Props) => {
  return (
    <button
      {...props}
      className={`
        cursor-pointer px-4 py-2 bg-blue-800 text-blue-50 rounded-md
        hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500
        disabled:opacity-50 disabled:cursor-not-allowed
        ${customClass}
      `}
    >
      {children}
    </button>
  );
};
