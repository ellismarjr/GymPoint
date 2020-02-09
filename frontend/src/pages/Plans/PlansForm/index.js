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

export default function PlansForm() {
  const { id } = useParams();

  function isNewPlan() {
    return !id;
  }

  function handleBack() {
    history.push('/plans');
  }

  return (
    <Container>
      <TopPage>
        <strong>
          {isNewPlan() ? 'Cadastro de planos' : 'Edição de plano'}
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
        // initialData={student}
        // schema={schema}
        // onSubmit={saveStudent}
      >
        <label>TÍTULO</label>
        <Input autoComplete="off" name="title" placeholder="GOLD" />

        <div>
          <div>
            <label>DURAÇÃO</label>
            <Input
              autoComplete="off"
              name="duration"
              type="number"
              placeholder="3"
            />
          </div>
          <div>
            <label>VALOR p/MÊS</label>
            <Input autoComplete="off" name="price" placeholder="R$ 129,00" />
          </div>
        </div>
      </Data>
    </Container>
  );
}

PlansForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
