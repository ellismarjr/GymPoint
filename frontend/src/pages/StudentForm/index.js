import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, TopPage, Data } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
    .email('Email inválido!')
    .required('Campo obrigatório'),
  age: Yup.number()
    .integer()
    .positive('Valor inválido!')
    .typeError('Valor inválido!')
    .required('Campo obrigatório'),
  weight: Yup.number()
    .positive('Valor inválido!')
    .typeError('Valor inválido!')
    .required('Campo obrigatório'),
  height: Yup.number()
    .typeError('Valor inválido!')
    .required('Campo obrigatório'),
});

export default function StudentForm() {
  const [student, setStudent] = useState({});

  const { id } = useParams();

  useEffect(() => {
    if (!isNewStudent()) {
      loadStudent();
    }
  }, []); //eslint-disable-line

  async function loadStudent() {
    try {
      const { data } = await api.get(`students/${id}`);

      setStudent(data);
    } catch (err) {
      toast.error('Erro ao carregar estudante!');
    }
  }

  function isNewStudent() {
    return !id;
  }

  function saveStudent(data) {
    if (isNewStudent()) {
      handleNewStudent(data);
    } else {
      handleUpdateStudent(data);
    }
  }

  async function handleNewStudent(data) {
    try {
      await api.post('students', data);
      handleBack();
    } catch (err) {
      toast.error('Erro ao salvar novo aluno!');
    }

    toast.success('Novo aluno salvo com sucesso!');
  }

  async function handleUpdateStudent(data) {
    try {
      await api.put(`students/${id}`, data);
    } catch (err) {
      toast.error('Erro ao salvar registro!');
    }

    toast.success('Aluno atualizado com sucesso!');
    handleBack();
  }

  function handleBack() {
    history.push('/students');
  }

  return (
    <Container>
      <TopPage>
        <strong>
          {isNewStudent() ? 'Cadastro de aluno' : 'Edição de aluno'}
        </strong>
        <div>
          <button type="button" onClick={() => handleBack()}>
            <MdKeyboardArrowLeft size={20} color="#fff" />
            <span>VOLTAR</span>
          </button>
          <button className="saveButton" type="submit" form="Form">
            <MdCheck size={20} color="#fff" />
            <span>SALVAR</span>
          </button>
        </div>
      </TopPage>

      <Data
        id="Form"
        initialData={student}
        schema={schema}
        onSubmit={saveStudent}
      >
        <label>NOME COMPLETO</label>
        <Input autoComplete="off" name="name" placeholder="Edward Snowden" />

        <label>ENDEREÇO DE E-MAIL</label>
        <Input
          autoComplete="off"
          name="email"
          type="email"
          placeholder="exemplo@email.com"
        />

        <div>
          <div>
            <label>IDADE</label>
            <Input autoComplete="off" name="age" type="number" />
          </div>
          <div>
            <label>PESO (em kg) </label>
            <Input autoComplete="off" name="weight" />
          </div>
          <div>
            <label>ALTURA</label>
            <Input autoComplete="off" name="height" />
          </div>
        </div>
      </Data>
    </Container>
  );
}

StudentForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
