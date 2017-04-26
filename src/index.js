import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import middleware from './middleware';
import reducer from './reducers';
import App from './components/App';
import IndentificationForm from './components/IndentificationForm';
import RegistrationForm from './components/RegistrationForm';
import UserPage from './components/UserPage';

const store = middleware(createStore)(reducer);

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route component={App}>
                <Route path='/' component={IndentificationForm} />
                <Route path='/registration-form' component={RegistrationForm} />
                 <Route path='/user-page' component={UserPage} />
            </Route>
        </Router>
    </Provider>,
document.getElementById('root'));