import { NavLink } from 'react-router-dom';
import * as S from './Sidebar.styled';
import { OpenMenu, CloseMeunu, BtnMenu } from '../../App.Style'; // Importe os componentes do botão de menu
import { FiHome, FiUsers, FiBell, FiPackage, FiImage, FiSettings } from 'react-icons/fi'; // Importe os ícones que você deseja usar

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void; // Adicione setIsOpen nas props
};

export const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <S.Container isOpen={isOpen}> {/* Passe isOpen para o Container Styled Component */}
      <S.Wopper>
        {/* Botão de menu dentro da sidebar */}
        <S.MenuButtonWrapper>
          <BtnMenu onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseMeunu /> : <OpenMenu />}
          </BtnMenu>
        </S.MenuButtonWrapper>

        {/* Links de navegação */}
        <S.Menu> {/* Crie um styled component para o menu */}
          <NavLink to="/">
            <S.MenuItem isOpen={isOpen}>
              <FiHome /> {/* Ícone para Dashboard */}
              {isOpen && <span>Dashboard</span>}
            </S.MenuItem>
          </NavLink>
          <NavLink to="/Usuarios">
            <S.MenuItem isOpen={isOpen}>
              <FiUsers /> {/* Ícone para Usuários */}
              {isOpen && <span>Usuários</span>}
            </S.MenuItem>
          </NavLink>
          {/* Adicione outros NavLinks com ícones e texto condicional */}
          <NavLink to="/Atendimento">
            <S.MenuItem isOpen={isOpen}>
              <FiBell /> {/* Ícone para Atendimento, usei FiBell como exemplo */}
              {isOpen && <span>Atendimento</span>}
            </S.MenuItem>
          </NavLink>
          <NavLink to="/Kanban">
            <S.MenuItem isOpen={isOpen}>
              <FiPackage /> {/* Ícone para Kanban, usei FiPackage como exemplo */}
              {isOpen && <span>Kanban</span>}
            </S.MenuItem>
          </NavLink>
          <NavLink to="/Painel">
            <S.MenuItem isOpen={isOpen}>
              <FiImage /> {/* Ícone para Painel, usei FiImage como exemplo */}
              {isOpen && <span>Painel</span>}
            </S.MenuItem>
          </NavLink>
          <NavLink to="/Setores">
            <S.MenuItem isOpen={isOpen}>
              <FiSettings /> {/* Ícone para Setores, usei FiSettings como exemplo */}
              {isOpen && <span>Setores</span>}
            </S.MenuItem>
          </NavLink>
        </S.Menu>
      </S.Wopper>
    </S.Container>
  );
};