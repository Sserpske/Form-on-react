import React, { useEffect } from 'react';

import { Form, Input } from '../../components';
import { useForm } from '../../hooks/useForm';

const fields = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Имя*',
    allowedCharactersRegex: /^[А-ЯЁа-яё ]+$/,
    isRequired: true,
    validateRegex: /^[а-я]{1,5}$/,
  },
  {
    type: 'text',
    name: 'phone',
    placeholder: 'Номер телефона*',
    allowedCharactersRegex: /^\+?[0-9]*$/,
    isRequired: true,
    validateRegex: /^[0-9]{1,5}$/,
  },
  {
    type: 'text',
    name: 'email',
    placeholder: 'Электронная почта',
  },
];

export const Registration = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const [
    fieldsValue,
    handleChange,
    handleSubmit,
    isFormValid
  ] = useForm(onSubmit, fields);

  return (
    <Form
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      title='Заполните форму'
      submitButtonText='Начать работу'
    >
      {fields.map((field) => (
        <Input
          key={field.name}
          type={field.type}
          name={field.name}
          onChange={handleChange}
          placeholder={field.placeholder}
          value={fieldsValue[field.name] || ''}
        />
      ))}
    </Form>
  );
};
