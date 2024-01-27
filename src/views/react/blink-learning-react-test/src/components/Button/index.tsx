import { MouseEventHandler } from 'react';
import './button.css';

type ButtonProps = {
  children: string | React.ReactElement;
  variant: 'success' | 'info' | 'warning' | 'error';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

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
