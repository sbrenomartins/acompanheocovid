import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import References from './pages/References';
import Countries from './pages/Countries';
import Brazil from './pages/Brazil';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/info' component={Info} />
            <Route path='/countries' component={Countries} />
            <Route path='/brazil' component={Brazil} />
            <Route path='/sources' component={References} />
            <Route path='*' component={() => <h1>Page not found</h1>}  />
        </Switch>
    </BrowserRouter>
);

export default Routes;