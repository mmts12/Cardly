import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { CardlyApp } from './pages/CardlyApp';
import { CardDetails } from './cmps/CardDetails'
import { Board } from './pages/Board';
import { About } from './pages/About';

export const routes = [
    {
        path: '/Cardly/:id',
        component: Board
    },
    {
        path: '/Cardly/card/:id',
        component: CardDetails
    },

    {
        path: '/Cardly',
        component: CardlyApp
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/',
        component: Home
    },
]