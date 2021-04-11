import React from 'react';

export const Button = (props) => {
  const {
    children,
    isDisabled,
    ...restProps
  } = props;

  return (
    <button
      disabled={isDisabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
