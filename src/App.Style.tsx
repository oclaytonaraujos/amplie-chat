import styled from 'styled-components'
import { FiAlignJustify } from "react-icons/fi";
import { FiAlignCenter } from "react-icons/fi";


export const OpenMenu = styled(FiAlignCenter)`
  font-size: 2rem;
  color: white; /* Ajuste a cor para o fundo escuro da sidebar */
  cursor: pointer;
`;

export const CloseMeunu = styled(FiAlignJustify)`
  font-size: 2rem;
  color: white; /* Ajuste a cor para o fundo escuro da sidebar */
  cursor: pointer;
`;

export const BtnMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent; /* Torna o fundo transparente para o botão de menu */
`;

export const Content = styled.div<{ isOpen: boolean }>`
  transition: margin-left 0.3s; /* Ajuste a transição para 0.3s */
  margin-left: ${({ isOpen }) => (isOpen ? '200px' : '60px')}; /* Ajuste a margem para 60px quando fechado */
  padding: 20px; /* Adicione padding para o conteúdo não ficar colado na sidebar */
`;