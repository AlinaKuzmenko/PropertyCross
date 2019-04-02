import { createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
// React Components
import DetailsContainer from '../containers/DetailsContainer';
import FavouritesContainer from '../containers/FavouritesContainer';
import ListContainer from '../containers/ListContainer';
import SearchContainer from '../containers/SearchContainer';

const AppNavigator = createStackNavigator(
    {
        Details: DetailsContainer,
        Favourites: FavouritesContainer,
        List: ListContainer,
        Search: SearchContainer,
    },
    {
        headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#9ba',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default AppNavigator;
