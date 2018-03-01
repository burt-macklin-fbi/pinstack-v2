import React from 'react';
// import { Route, IndexRoute } from 'react-router';
import { HashRouter, NavLink, BrowserRouter as Router } from 'react-router-dom';
import App from './Components/App';
import Explore from './Components/Views/Explore';
import MyAccount from './Components/Views/MyAccount';
import CreateMap from './Components/Views/CreateMap';


export default (
  <Route path='/' component={App}>
    <IndexRoute component={Explore} />
    <Route path='myaccount' component={MyAccount} />
    <Route path='create-map' component={CreateMap} />
    <Route path='*' component={Explore} />
  </Route>
);