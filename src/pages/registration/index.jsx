import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input, Modal } from '../../components';
import { useForm } from '../../hooks/useForm';
import { setUserInfo } from '../../store/userActions';
import { getUserInfo } from '../../store/userSelectors';

export const Registration = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(getUserInfo);

  const onSubmit = (values) => {
    showModal(true);
    dispatch(setUserInfo(values));
  };

  const [
    fieldsValue,
    handleChange,
    handleSubmit,
    isFormValid,
  ] = useForm(onSubmit, fields);

  const showModal = () => {
    setIsShowModal(true);
  };

  const hideModal = () => {
    setIsShowModal(false);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
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
      <Modal
        isShow={isShowModal}
        hideModal={hideModal}
      />
    </>
  );
};

const fields = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Имя*',
    allowedCharactersRegex: /^[А-ЯЁа-яё ]+$/,
    isRequired: true,
    validateRegex: /^[А-ЯЁа-яё ]{3,}$/,
  },
  {
    type: 'text',
    name: 'phone',
    placeholder: 'Номер телефона*',
    allowedCharactersRegex: /^\+?[0-9]*$/,
    isRequired: true,
    validateRegex: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{9,11}$/,
  },
  {
    type: 'text',
    name: 'email',
    placeholder: 'Электронная почта',
  },
];
