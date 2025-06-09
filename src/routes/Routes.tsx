import Dashboard from '../pages/Dashboard';
import Atendimento from '../pages/Atendimentos';
import Kanban from '../pages/Kanbam';
import Painel from '../pages/Painel';
import ChatInterno from '../pages/ChatInterno';
import Usuarios from '../pages/Usuarios';
import Setores from '../pages/Setores';
import Perfil from '../pages/Perfil';
import Configuracoes from '../pages/Configuracoes';

const Routes = [
    { path: '/', element: <Dashboard /> },
    { path: '/Atendimento', element: <Atendimento /> },
    { path: '/Kanban', element: <Kanban /> },
    { path: '/Painel', element: <Painel /> },
    { path: '/chatbotinterno', element: <ChatInterno /> },
    { path: '/Usuarios', element: <Usuarios /> },
    { path: '/Setores', element: <Setores /> },
    { path: '/Perfil', element: <Perfil /> },
    { path: '/Configuracoes', element: <Configuracoes /> },
];

export default Routes;