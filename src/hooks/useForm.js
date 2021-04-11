import { useState, useCallback, useEffect } from 'react';
import find from 'lodash/find';
import reduce from 'lodash/reduce';
import every from 'lodash/every';

export const useForm = (submitCallback, fieldsProperties) => {
  const [fieldsValue, setFieldsValue] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const initialErrorsValue = reduce(
    fieldsProperties, (errors, { isRequired, name }) => isRequired ?
      { ...errors, [name]: { isError: true } } :
      errors,
    {});

  const [errors, setErrors] = useState(initialErrorsValue);

  const isValid = (regex, value) => regex.test(value);

  const handleChange = useCallback(e => {
    const currentField = find(fieldsProperties, field => field.name === e.target.name);

    if (
      e.target.value &&
      currentField.allowedCharactersRegex &&
      !isValid(currentField.allowedCharactersRegex, e.target.value)
    ) {
      return;
    }

    if (errors && errors[e.target.name]) {
      if (!isValid(currentField.validateRegex, e.target.value)) {
        setErrors(
          (prevState) => ({ ...prevState, [e.target.name]: { isError: true } })
        );
      } else {
        setErrors(
          (prevState) => ({ ...prevState, [e.target.name]: { isError: false } })
        );
      }
    }

    setFieldsValue(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }, []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    submitCallback(fieldsValue);
  }, [fieldsValue]);

  useEffect(() => {
    if (every(errors, ({ isError }) => !isError)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [errors]);

  return [
    fieldsValue,
    handleChange,
    handleSubmit,
    isFormValid,
  ];
};
