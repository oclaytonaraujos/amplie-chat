import styled from 'styled-components';
import { FiSearch, FiUser, FiSettings, FiBell } from 'react-icons/fi'; // Importe os ícones necessários

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f8f8; /* Cor de fundo da barra */
  border-bottom: 1px solid #eee; /* Linha divisória inferior */
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Breadcrumb = styled.div`
  font-size: 0.9em;
  color: #777;
  display: flex;
  align-items: center;
`;

export const PageTitle = styled.h1`
  font-size: 1.5em;
  margin: 0;
  color: #333;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; /* Espaçamento entre os itens */
`;

export const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
`;

export const IconWrapper = styled.div`
  font-size: 1.5em; /* Tamanho dos ícones */
  color: #555;
  cursor: pointer;

  &:hover {
    color: #007bff; /* Cor ao passar o mouse */
  }
`;

// Exportando os ícones para uso direto no Header.tsx se necessário, ou podem ser importados lá
export const SearchIcon = styled(FiSearch)``;
export const UserIcon = styled(FiUser)``;
export const SettingsIcon = styled(FiSettings)``;
export const BellIcon = styled(FiBell)``;