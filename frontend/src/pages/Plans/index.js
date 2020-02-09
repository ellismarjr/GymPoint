import React, { useState, useEffect } from 'react';
import { confirmAlert, onClose } from 'react-confirm-alert';
import api from '~/services/api';
import history from '~/services/history';
import { formatPrice } from '~/util/format';

import { Container, PlansList, Plan } from './styles';
import { toast } from 'react-toastify';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    loadPlans();
  }, []); //eslint-disable-line

  async function loadPlans() {
    try {
      const { data } = await api.get('plans');

      setPlans(data);
    } catch (err) {
      toast.error('Erro ao carregar planos!');
    }
  }

  function handleNewPlan() {
    history.push('/plan/new');
  }

  function handleEditPlan(id) {
    history.push(`/plan/${id}/edit`);
  }

  async function handleDeletePlan(id) {
    try {
      await api.delete(`plans/${id}`);
    } catch (err) {
      toast.error('Erro ao excluir plano!');
    }

    toast.success('Plano excluído com sucesso!');
    loadPlans(1);
  }

  function handleClose() {
    confirmAlert({ onClose });
  }

  function handleConfirm(id, title) {
    confirmAlert(
      {
        title: 'Exclusão de Plano',
        message: `Deseja realmente excluir o plano ${title}?`,
        buttons: [
          {
            label: 'Sim',
            onClick: () => handleDeletePlan(id),
          },
          {
            label: 'Não',
            onClick: () => handleClose(),
          },
        ],
      },
      { onClickOutside: true }
    );
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando planos</strong>
        <button onClick={() => handleNewPlan()} type="button">
          CADASTRAR
        </button>
      </header>

      <PlansList>
        <Plan>
          <thead>
            <tr>
              <th>TÍTULO</th>
              <th>DURAÇÃO</th>
              <th>VALOR p/MÊS</th>
              <th aria-label="Título da coluna vazia"></th>
            </tr>
          </thead>

          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <td>{plan.duration}</td>
                <td>{formatPrice(plan.price)}</td>
                <td>
                  <button type="button" onClick={() => handleEditPlan(plan.id)}>
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleConfirm(plan.id, plan.title)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Plan>
      </PlansList>
    </Container>
  );
}
