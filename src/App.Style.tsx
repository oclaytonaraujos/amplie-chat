import styled from 'styled-components'
import { FiAlignJustify } from "react-icons/fi";
import { FiAlignCenter } from "react-icons/fi";


export const OpenMenu = styled(FiAlignCenter)`
  font-size: 2rem;
  color: black;
  cursor: pointer;
`;

export const CloseMeunu = styled(FiAlignJustify)`
  font-size: 2rem;
  color: black;
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
`;

export const Content = styled.div<{ isOpen: boolean }>`
  transition: margin-left 0.9s;
  margin-left: ${({ isOpen }) => (isOpen ? '200px' : '0')};
`;