import React, { Component } from 'react';
// import './App.css';
import './assets/styles/main.scss';
import { Header } from './cmps/Header';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes.js';
import { connect } from 'react-redux';
import { loadBoards } from './store/actions/boardActions.js';

export class _App extends Component {
  componentDidMount() {
    this.loadBoards();
  }

  loadBoards = () => {
    this.props.loadBoards();
  };

  render() {
    // if (!this.props.boards) return <h1>Loading...</h1>;
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
}

const mapStateToProps = (state) => {
  return {
    boards: state.boardModule.boards,
  };
};

const mapDispatchToProps = {
  loadBoards,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
