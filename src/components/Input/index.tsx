import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}

function Input({ id, label, placeholder, type, ...props }: InputProps) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input {...props} type={type} className="form-control" id={id} placeholder={placeholder} />
    </div>
  )
}

export default Input;
