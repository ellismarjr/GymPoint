import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { format, parseISO } from 'date-fns';

import { Container, EnrollmentsList, Enrollment } from './styles';
import api from '~/services/api';

export default function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    loadEnrollments();
  }, []); //eslint-disable-line

  async function loadEnrollments() {
    try {
      const { data } = await api.get('enrollments');
      setEnrollments(data);
    } catch (err) {
      toast.error('Erro ao carregar matrículas!');
    }
  }

  function formatDate(date) {
    const formattedDate = format(parseISO(date), 'dd/MM/yyyy');
    return formattedDate;
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando matrículas</strong>
        <button type="button">CADASTRAR</button>
      </header>

      <EnrollmentsList>
        <Enrollment>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
              <th aria-label="Título da coluna vazia"></th>
            </tr>
          </thead>

          <tbody>
            {enrollments.map(enrollment => (
              <tr key={enrollment.id}>
                <td>{enrollment.student.name}</td>
                <td>{enrollment.plan.title}</td>
                <td>{formatDate(enrollment.start_date)}</td>
                <td>{formatDate(enrollment.end_date)}</td>
                <td>ATIVO</td>
                <td>
                  <button type="button">Editar</button>
                  <button type="button">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Enrollment>
      </EnrollmentsList>
    </Container>
  );
}
