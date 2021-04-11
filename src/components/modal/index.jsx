import React, { useRef } from 'react';

import { useClickOutside } from '../../hooks/useClickOutside';

import styles from './styles.pcss';

export const Modal = ({ isShow, hideModal }) => {
  const clickRef = useRef();

  useClickOutside(clickRef, hideModal);

  if (isShow) {
    return (
      <div className={styles.modal}>
        <div ref={clickRef} className={styles.modal__main}>
          <h1>I'm a Modal!</h1>
        </div>
      </div>
    );
  }

  return null;
};
