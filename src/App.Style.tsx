import styled from 'styled-components'
import {BiMenu} from 'react-icons/bi'
import {BsFillBackspaceFill} from 'react-icons/bs'

export const OpenMenu = styled(BiMenu)`
  font-size: 2rem;
  color: black;
  cursor: pointer;
`;

export const CloseMeunu = styled(BsFillBackspaceFill)`
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