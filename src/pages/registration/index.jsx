import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input, Modal, Agreement } from '../../components';
import { useForm } from '../../hooks/useForm';
import { setUserInfo } from '../../store/userActions';
import { getUserInfo } from '../../store/userSelectors';
import { request } from '../../api';

import styles from './styles.pcss';

export const Registration = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(getUserInfo);

  const onSubmit = async (values) => {
    const response = await request(values);

    showModal(true);
    dispatch(setUserInfo(response));
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
    // Показываем что положили в стор
    console.log(user);
  }, [user]);

  return (
    <div className={styles.registration}>
      <Form
        onSubmit={handleSubmit}
        isFormValid={isFormValid}
        title='Заголовок формы'
        submitButtonText='Начать работу'
        className={styles.registration__form}
        agreement={
          <Agreement>
            Нажимая кнопку «Отправить», я даю своё согласие на обработку персональных данных. <a className={styles.registration__agreementLink} href="/images/moskva-krasna-ploshchad-noch.jpg" download={true}>Условия использования данных.</a>
          </Agreement>}
      >
        {fields.map((field) => (
          <Input
            key={field.name}
            type={field.type}
            name={field.name}
            onChange={handleChange}
            placeholder={field.placeholder}
            value={fieldsValue[field.name] || ''}
            sizeS={field.sizeS}
          />
        ))}
      </Form>
      <Modal
        isShow={isShowModal}
        hideModal={hideModal}
        success={true}
      >
        Заявка отправлена! <br/>
        Менеджер уже звонит, посмотрите на телефон.
      </Modal>
    </div>
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
    sizeS: true,
  },
  {
    type: 'text',
    name: 'email',
    placeholder: 'Электронная почта',
  },
];
