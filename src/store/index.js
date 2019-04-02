import { applyMiddleware, createStore } from 'redux';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import createSagaMiddleware from 'redux-saga'
// Reducers
import appReducer from '../reducers';
// Sagas
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const navigationMiddleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
);

const middleware = [
    navigationMiddleware,
    sagaMiddleware
];

const store = createStore(appReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
