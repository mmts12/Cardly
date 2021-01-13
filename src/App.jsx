import React from 'react';
// import './App.css';
import './assets/styles/main.scss';
import { Header } from './cmps/Header';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes.js';

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
