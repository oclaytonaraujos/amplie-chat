import styled from 'styled-components';
import { FiUser } from 'react-icons/fi'; // Importe o ícone de usuário

export const Container = styled.div<{ isOpen: boolean }>`
    background-Color: #000000;
    width: ${({ isOpen }) => (isOpen ? '200px' : '60px')}; /* Largura ajustável */
    height: 100vh; /* Para ocupar toda a altura */
    position: fixed;
    border-radius: 5px;
    margin: 0; /* Remova a margem para fixar no canto */
    padding-top: 10px; /* Espaçamento no topo */
    transition: width 0.3s; /* Transição suave na largura */
    overflow-x: hidden; /* Oculta o scroll horizontal */
`;

export const Wopper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza itens horizontalmente */
    border-radius: 15px;
    margin: 10px;
    gap: 5px;
`;

export const MenuButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end; /* Alinha o botão à direita */
    padding: 10px;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    color: white;
`;

export const UserAvatar = styled(FiUser)`
    font-size: 3em;
    margin-bottom: 10px;
    color: white;
`;

export const UserName = styled.h3`
    margin: 0;
    font-size: 1.2em;
`;

export const UserRole = styled.p`
    margin: 5px 0 0;
    font-size: 0.8em;
    color: #ccc;
`;

export const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const MenuItem = styled.div<{ isOpen: boolean }>`
    display: flex;
    align-items: center;
    padding: 10px;
    color: white;
    text-decoration: none;
    font-size: 1em;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 5px;

    &:hover {
        background-color: #333;
    }

    svg {
        margin-right: ${({ isOpen }) => (isOpen ? '10px' : '0')}; /* Espaçamento do ícone apenas quando aberto */
        font-size: 1.5em;
    }

    span {
        display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')}; /* Esconde o texto quando fechado */
        white-space: nowrap; /* Evita que o texto quebre linha */
    }
`;

// Estilos para os NavLink podem ser definidos diretamente aqui ou no Sidebar.tsx, dependendo da preferência.
// Exemplo (se você quiser estilizar o NavLink em vez do MenuItem diretamente):
// export const StyledNavLink = styled(NavLink)`
//   color: white;
//   text-decoration: none;
//   width: 100%;
//   &.active {
//     background-color: #555;
//   }
// `;