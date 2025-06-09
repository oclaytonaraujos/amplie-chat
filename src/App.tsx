import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';
import { OpenMenu, CloseMeunu, BtnMenu, Content } from './App.Style';
import routesConfig from './routes/Routes';
import Header from './components/header/Header';

const App = () => {
  const [open, setIsOpen] = useState(false);
  const location = useLocation();

  const getPageTitle = (pathname: string) => {
    // Busca a rota no array routesConfig
    const route = routesConfig.find(r => r.path === pathname);

    // Retorna o título correspondente ao caminho da rota
    if (route) {
      switch (route.path) {
        case '/': return 'Dashboard';
        case '/Atendimento': return 'Atendimento';
        case '/Kanban': return 'Kanban';
        case '/Painel': return 'Painel';
        case '/chatbotinterno': return 'Chat Interno';
        case '/Usuarios': return 'Usuários';
        case '/Setores': return 'Setores';
        case '/Perfil': return 'Perfil'; // Adicione o título para a página de Perfil
        case '/Configuracoes': return 'Configurações'; // Adicione o título para a página de Configurações
        default: return 'Página';
      }
    }
    return 'Página';
  };

  const currentPageTitle = getPageTitle(location.pathname);

  return (
    <>
      <Sidebar isOpen={open} />
      <Content isOpen={open}>
        <BtnMenu onClick={() => setIsOpen(!open)}>
          {open ? <CloseMeunu /> : <OpenMenu />}
        </BtnMenu>
        <Header pageTitle={currentPageTitle} />
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Content>
    </>
  );
};

export default App;