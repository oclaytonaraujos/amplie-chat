import Dashboard from '../pages/Dashboard';
import Atendimento from '../pages/Atendimentos';
import Kanban from '../pages/Kanbam';
import Painel from '../pages/Painel';
import ChatInterno from '../pages/ChatInterno';

const Routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/Atendimento', element: <Atendimento /> },
  { path: '/Kanban', element: <Kanban /> },
  { path: '/Painel', element: <Painel /> },
  { path: '/chatbotinterno', element: <ChatInterno /> },
];

export default Routes;