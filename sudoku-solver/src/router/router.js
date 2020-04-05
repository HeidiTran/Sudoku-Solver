import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import * as createHistory from 'history';
import { NavMenuComponent } from '../component/NavMenu';
import { HomeComponent } from '../component/Home';
import { AboutComponent } from '../component/About';

export const history = createHistory.createBrowserHistory();

export const AppRouter = () => (
  <Router history={ history }>
    <NavMenuComponent />
    <Container fluid className="mt-3">
      <Switch>
        <Route path='/Sudoku-Solver/home' component={ HomeComponent }/>
        <Route path='/Sudoku-Solver/about' component={ AboutComponent }/>
        <Redirect from='/Sudoku-Solver' to='/Sudoku-Solver/home' />
      </Switch>
    </Container>
  </Router>
);

