import React from 'react';

import styles from './styles.pcss';

export const Input = (props) => {
  const { name, placeholder, value, type, onChange } = props;

  return (
    <input
      className={styles.input}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />);
};
