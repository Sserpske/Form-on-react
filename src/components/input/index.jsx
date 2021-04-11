import React from 'react';

export const Input = (props) => {
  const { error, name, placeholder, value, className, type, onChange, onBlur, ...restProps } = props;

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...restProps}
    />);
};
