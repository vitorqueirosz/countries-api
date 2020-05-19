import React from 'react';
import { BrowserRouter, Switch, Route,  } from 'react-router-dom';
// import Main from './components/Main';
import Details from './components/Details';

const Routes = ({ changeTheme }) =>{
    return (
        <BrowserRouter>
        <Switch>
                <Route path="/:country" exact component={Details} />
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;
