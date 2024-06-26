import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login';
import Registro from './Registro';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={login} />
                <Route path="/registro" component={Registro} />
              
            </Switch>
        </Router>
    );
};

export default App;
