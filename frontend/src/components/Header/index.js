import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo_header.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link>
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
              <Link>
                <strong>Administrador</strong>
              </Link>
              <Link>
                <span>sair do sistema</span>
              </Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
