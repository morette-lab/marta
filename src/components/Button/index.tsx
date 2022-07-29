import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  label: string;
}

function Button({ label, ...props }: ButtonProps) {
  return (
    <button {...props} type="button" className="btn btn-outline-success w-100">{label}</button>
  )
}

export default Button;
