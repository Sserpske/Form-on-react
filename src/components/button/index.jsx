import React from 'react';

import styles from './styles.pcss';

export const Button = ({
  children,
  isDisabled,
}) => {
  return (
    <button
      className={styles.button}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
