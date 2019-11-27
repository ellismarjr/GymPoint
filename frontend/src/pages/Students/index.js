import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Input } from '@rocketseat/unform';

import { MdAdd, MdSearch } from 'react-icons/md';

import api from '~/services/api';

import { Container, StudantsList, Studant, Paginator } from './styles';

export default function Students() {
  const [studantSearch, setStudantSearch] = useState();
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);

  useEffect(() => {
    loadStudents(1);
  }, []); //eslint-disable-line

  async function loadStudents(currentPage) {
    try {
      const { data } = await api.get('students', {
        params: { searchStudent: studantSearch, page: currentPage },
      });

      setPage(currentPage);
      setLastPage(data.lastPage);
      setStudents(data.content);
    } catch (err) {
      toast.error('Erro ao carregar alunos!');
    }
  }

  function handleStudantSearch(e) {
    setStudantSearch(e.target.value);
  }

  function handlePreviousPage() {
    const currentPage = page - 1;
    loadStudents(currentPage);
  }

  function handleNextPage() {
    const currentPage = page + 1;
    loadStudents(currentPage);
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
            onKeyDown={event => event.key === 'Enter' && loadStudents(1)}
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

      <Paginator>
        <button
          type="button"
          disabled={page === 1}
          onClick={() => {
            handlePreviousPage();
          }}
        >
          Anterior
        </button>
        <button
          disabled={lastPage}
          type="button"
          onClick={() => {
            handleNextPage();
          }}
        >
          Próxima
        </button>
      </Paginator>
    </Container>
  );
}
