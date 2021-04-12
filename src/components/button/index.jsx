import React from 'react';

import styles from './styles.pcss';

export const Button = (props) => {
  const {
    children,
    isDisabled,
    ...restProps
  } = props;

  return (
    <button
      className={styles.button}
      disabled={isDisabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
