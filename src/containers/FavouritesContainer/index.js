import React from 'react';
// Native components
import { Text, View } from 'react-native';
// Styles
import styles from './styles';

class FavouritesContainer extends React.Component {
    static navigationOptions = () => ({
        title: 'Favourites',
    });

    render() {
        return (
            <View style={styles.favourites}>
                <Text>Favourites Container</Text>
            </View>
        );
    }
}

export default FavouritesContainer;
