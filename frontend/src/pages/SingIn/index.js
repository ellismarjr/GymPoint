import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SingIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GymPoint" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="">SEU E-MAIL</label>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <label htmlFor="">SUA SENHA</label>
        <Input name="password" type="password" placeholder="***************" />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
