import { combineReducers } from 'redux';
// Reducers
import navReducer from './navReducer';
import listingsReducer from './listingsReducer';

export default combineReducers({
    data: listingsReducer,
    nav: navReducer
});
