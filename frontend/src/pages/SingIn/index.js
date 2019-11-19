import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SingIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GymPoint" />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="">SEU E-MAIL</label>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <label htmlFor="">SUA SENHA</label>
        <Input name="password" type="password" placeholder="***************" />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
