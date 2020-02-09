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
  title: Yup.string().required('Campo TÍTULO obrigatório!'),
  duration: Yup.number()
    .positive('Valor deve ser positivo!')
    .typeError('Valor inválido!')
    .required('Campo DURAÇÂO obrigatório!'),
  price: Yup.number()
    .typeError('Valor inválido!')
    .required('Campo PREÇO obrigatório!'),
});

export default function PlansForm() {
  const [plan, setPlan] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (!isNewPlan()) {
      loadPlans();
    }
  }, []); //eslint-disable-line

  async function loadPlans() {
    try {
      const { data } = await api.get(`plans/${id}`);
      setPlan(data);
    } catch (err) {
      toast.error('Erro ao carregar plano!');
    }
  }

  function isNewPlan() {
    return !id;
  }

  function savePlan(data) {
    if (isNewPlan()) {
      handleNewPlan(data);
    } else {
      handleUpdatePlan(data);
    }
  }

  async function handleNewPlan(data) {
    try {
      await api.post('plans', data);
      handleBack();
    } catch (err) {
      toast.error('Erro ao salvar novo plano!');
    }

    toast.success('Novo Plano salvo com sucesso!');
  }

  async function handleUpdatePlan(data) {
    try {
      await api.put(`plans/${id}`, data);
    } catch (error) {
      toast.error('Erro ao atualizar plano');
    }

    toast.success('Plano atualizado com sucesso');
    handleBack();
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

      <Data id="Form" initialData={plan} schema={schema} onSubmit={savePlan}>
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
