import React from 'react';
import cn from 'classnames';

import styles from './styles.pcss';

export const Input = ({
  name,
  placeholder,
  value,
  type,
  onChange,
  sizeS,
}) => {
  return (
    <input
      className={cn({
        [styles.input]: true,
        [styles.input_s]: sizeS,
      })}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />);
};
