import React, { useState, useEffect } from 'react';

import api from '~/services/api';
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

  return (
    <Container>
      <header>
        <strong>Gerenciando planos</strong>
        <button type="button">CADASTRAR</button>
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
                  <button type="button">Editar</button>
                  <button type="button">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Plan>
      </PlansList>
    </Container>
  );
}
