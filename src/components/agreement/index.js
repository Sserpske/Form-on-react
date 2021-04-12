import React from 'react';

import styles from './styles.pcss';

export const Agreement = ({ children }) => {
  return (
    <div className={styles.agreement}>{children}</div>
  );
};
