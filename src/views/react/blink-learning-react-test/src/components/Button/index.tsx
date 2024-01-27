import './button.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: string | React.ReactElement;
  variant: 'success' | 'info' | 'warning' | 'error';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={`button button--variant-${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
