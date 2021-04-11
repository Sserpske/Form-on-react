import React from 'react';

import { Button } from '../button';

export const Form = (props) => {
  const {
    children,
    onSubmit,
    title,
    submitButtonText,
    isFormValid
  } = props;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          {children}
        </div>
        <div>
          <Button
            isDisabled={!isFormValid}
          >{submitButtonText}</Button>
        </div>
      </form>
    </div>
  );
};
