import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo_header.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="GymPoint" />
          </Link>
          <Link>
            <strong>ALUNOS</strong>
          </Link>
          <Link>
            <strong>PLANOS</strong>
          </Link>
          <Link>
            <strong>MATRÍCULAS</strong>
          </Link>
          <Link>
            <strong>PEDIDOS DE AUXÍLIO</strong>
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <Link to="/profile">
                <strong>{profile.name}</strong>
              </Link>
              <Link>
                <button type="button" onClick={handleSignOut}>
                  sair do sistema
                </button>
              </Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
