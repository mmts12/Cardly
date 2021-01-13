import React from 'react';
// import './App.css';
import './assets/styles/main.scss';
import { Header } from './cmps/Header';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)
export function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {routes.map((route) => (
          <Route
            exact
            key={route.path}
            component={route.component}
            path={route.path}
          />
        ))}
      </Switch>
    </div>
  );
}
