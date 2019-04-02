import { createNavigationReducer } from 'react-navigation-redux-helpers';
// Components
import AppNavigator from '../navigation/AppNavigator';

const navReducer = createNavigationReducer(AppNavigator);

export default navReducer;
