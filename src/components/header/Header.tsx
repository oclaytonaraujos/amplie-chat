import * as S from './Header.styled';
import { FiSearch } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'; // Importe NavLink

type Props = {
  pageTitle: string;
};

const Header = ({ pageTitle }: Props) => {
  return (
    <S.HeaderContainer>
      <S.LeftSection>
        <S.Breadcrumb>
          <FiSearch /> / Dashboard {/* O ícone da casa não existe no Fi, usando search como placeholder */}
        </S.Breadcrumb>
        <S.PageTitle>{pageTitle}</S.PageTitle>
      </S.LeftSection>
      <S.RightSection>
        <S.SearchInput type="text" placeholder="Search here" />
        <NavLink to="/Perfil"> {/* Use NavLink para o ícone de Perfil */}
          <S.IconWrapper>
            <S.UserIcon />
          </S.IconWrapper>
        </NavLink>
        <NavLink to="/Configuracoes"> {/* Use NavLink para o ícone de Configurações */}
          <S.IconWrapper>
            <S.SettingsIcon />
          </S.IconWrapper>
        </NavLink>
        <S.IconWrapper>
          <S.BellIcon />
        </S.IconWrapper>
      </S.RightSection>
    </S.HeaderContainer>
  );
};

export default Header;