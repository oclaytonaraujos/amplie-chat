import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Importe Routes e Route
import { Sidebar } from './components/sidebar/Sidebar';
import { OpenMenu, CloseMeunu, BtnMenu, Content } from './App.Style';
import routesConfig from './routes/Routes'; // Importe as rotas que você definiu

const App = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={open} />
      <Content isOpen={open}>
        <BtnMenu onClick={() => setIsOpen(!open)}>
          {open ? <CloseMeunu /> : <OpenMenu />}
        </BtnMenu>
        <Routes> {/* Use o componente Routes aqui */}
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Content>
    </>
  );
};

export default App;