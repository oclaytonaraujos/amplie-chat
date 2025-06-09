import Dashboard from '../pages/Dashboard';
import Atendimento from '../pages/Atendimentos';
import Kanban from '../pages/Kanbam';
import Painel from '../pages/Painel';
import ChatInterno from '../pages/ChatInterno';
import Usuarios from '../pages/Usuarios';
import Setores from '../pages/Setores';

const Routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/Atendimento', element: <Atendimento /> },
  { path: '/Kanban', element: <Kanban /> },
  { path: '/Painel', element: <Painel /> },
  { path: '/chatbotinterno', element: <ChatInterno /> },
    { path: '/Usuarios', element: <Usuarios /> },
  { path: '/Setores', element: <Setores /> },
];

export default Routes;