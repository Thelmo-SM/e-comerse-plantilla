interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  customClass?: string;
  children: React.ReactNode;
}

export const LabelUI = ({ children, customClass = '', ...props }: Props) => {
  return (
    <label
      {...props}
      className={`block text-sm font-medium text-blue-900 ${customClass}`}
    >
      {children}
    </label>
  );
};
