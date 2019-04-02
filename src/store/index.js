import { applyMiddleware, createStore } from 'redux';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
// Reducers
import appReducer from '../reducers';

const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
);

const store = createStore(appReducer, applyMiddleware(middleware));

export default store;
