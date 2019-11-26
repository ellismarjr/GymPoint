import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Input } from '@rocketseat/unform';

import api from '~/services/api';

import { Container, StudantsList, Studant } from './styles';

export default function Students() {
  const [studantSearch, setStudantSearch] = useState();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {
    try {
      const response = await api.get('students');
      setStudents(response.data);
    } catch (err) {
      toast.error('Erro ao carregar alunos!');
    }
  }

  function handleStudantSearch(e) {
    setStudantSearch(e.target.value);
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando alunos</strong>
        <div>
          <button type="button">CADASTRAR</button>
          <Input
            name="student"
            placeholder="Buscar aluno"
            onKeyDown={event => event.key === 'Enter' && loadStudents()}
            onChange={handleStudantSearch}
          />
        </div>
      </header>

      <StudantsList>
        <Studant>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>IDADE</th>
              <th aria-label="Título da coluna vazia"></th>
            </tr>
          </thead>

          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <button type="button">Editar</button>
                  <button type="button">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Studant>
      </StudantsList>
    </Container>
  );
}
