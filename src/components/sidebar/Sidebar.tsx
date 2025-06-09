// src/components/sidebar/Sidebar.tsx
import { NavLink } from 'react-router-dom'; // Importe NavLink
import * as S from './Sidebar.styled';

type Props = {
  isOpen: boolean;
};

export const Sidebar = ({ isOpen }: Props) => {
  if (isOpen) {
    return (
      <>
        <S.Container>
          <S.Wopper>
            {/* Utilize NavLink para cada item do menu */}
            <NavLink to="/">
              <button>Dashboard</button>
            </NavLink>
            <NavLink to="/Atendimento">
              <button>Atendimento</button>
            </NavLink>
            <NavLink to="/Kanban">
              <button>Kanban</button>
            </NavLink>
            <NavLink to="/Painel">
              <button>Painel</button>
            </NavLink>
            <NavLink to="/chatbotinterno">
              <button>Chat Interno</button>
            </NavLink>
            <NavLink to="/Usuarios">
              <button>Usuários</button>
            </NavLink>
            <NavLink to="/Setores">
              <button>Setores</button>
            </NavLink>
          </S.Wopper>
        </S.Container>
      </>
    );
  }
  return null; // Retorna null quando a sidebar estiver fechada
};