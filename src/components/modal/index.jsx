import React, { useRef } from 'react';
import Fade from 'react-reveal/Fade';

import { CheckIcon } from '../check-icon';
import { useClickOutside } from '../../hooks/useClickOutside';

import styles from './styles.pcss';

export const Modal = (
  {
    isShow,
    hideModal,
    success,
    children,
  }
) => {
  const clickRef = useRef();

  useClickOutside(clickRef, hideModal);

  if (isShow) {
    return (
      <Fade duration={500}>
        <div className={styles.modal}>
          <div ref={clickRef} className={styles.modal__main}>
            {success && <CheckIcon
              className={styles.modal__icon}
            />}
            <div className={styles.modal__text}>{children}</div>
          </div>
        </div>
      </Fade>
    );
  }

  return null;
};
