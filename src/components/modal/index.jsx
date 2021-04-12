import React, { useRef } from 'react';
import Fade from 'react-reveal/Fade';

import { useClickOutside } from '../../hooks/useClickOutside';

import styles from './styles.pcss';

export const Modal = ({ isShow, hideModal }) => {
  const clickRef = useRef();

  useClickOutside(clickRef, hideModal);

  if (isShow) {
    return (
      <Fade duration={500}>
        <div className={styles.modal}>
          <div ref={clickRef} className={styles.modal__main}>
            <h1>I'm a Modal!</h1>
          </div>
        </div>
      </Fade>
    );
  }

  return null;
};
