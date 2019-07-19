import React, {Component} from 'react';
 import './index.scss';
 import LandingPage from './pages/LandingPage';
 import Contact from './pages/Contact';
 import {BrowserRouter, Switch, Route} from 'react-router-dom';
 

class App extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={LandingPage}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-one`} component={LandingPage}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact-us`} component={Contact}/>
                 </Switch>
            </BrowserRouter>
        )
    }
}

export default App;