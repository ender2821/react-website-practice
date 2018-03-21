import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import About from './About';
import Home from './Home';

const Router = () => (  
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route component={NotFound}/>
            </Switch>
        </App>
    </BrowserRouter>    
);

export default Router;