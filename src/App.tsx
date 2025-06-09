import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';
import { Content } from './App.Style'; // Remova OpenMenu, CloseMeunu, BtnMenu
import routesConfig from './routes/Routes';
import Header from './components/header/Header';

const App = () => {
  const [open, setIsOpen] = useState(false);
  const location = useLocation();

  const getPageTitle = (pathname: string) => {
    const route = routesConfig.find(r => r.path === pathname);

    if (route) {
      switch (route.path) {
        case '/': return 'Dashboard';
        case '/Atendimento': return 'Atendimento';
        case '/Kanban': return 'Kanban';
        case '/Painel': return 'Painel';
        case '/chatbotinterno': return 'Chat Interno';
        case '/Usuarios': return 'Usuários';
        case '/Setores': return 'Setores';
        case '/Perfil': return 'Perfil';
        case '/Configuracoes': return 'Configurações';
        default: return 'Página';
      }
    }
    return 'Página';
  };

  const currentPageTitle = getPageTitle(location.pathname);

  return (
    <>
      {/* Passe setIsOpen para a Sidebar */}
      <Sidebar isOpen={open} setIsOpen={setIsOpen} />
      <Content isOpen={open}>
        {/* Remova o BtnMenu daqui */}
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