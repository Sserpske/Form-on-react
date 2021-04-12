import React from 'react';
import cn from 'classnames';

import { Button } from '../button';

import styles from './styles.pcss';

export const Form = (props) => {
  const {
    children,
    onSubmit,
    title,
    submitButtonText,
    isFormValid,
    className,
    agreement,
  } = props;

  return (
    <form className={cn({
      [styles.form]: true,
      [className]: !!className,
    })} onSubmit={onSubmit}>
      {title && <p className={styles.form__title}>{title}</p>}
      <div className={styles.form__fieldsContainer}>
        {children}
      </div>
      <div>
        <Button
          isDisabled={!isFormValid}
        >{submitButtonText}</Button>
        {agreement && agreement}
      </div>
    </form>
  );
};
