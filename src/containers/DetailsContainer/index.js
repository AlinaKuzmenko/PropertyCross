import React from 'react';
// Native components
import { Text, View } from 'react-native';
// Styles
import styles from './styles';

class DetailsContainer extends React.Component {
    static navigationOptions = () => ({
        title: 'Details',
    });

    render() {
        return (
            <View style={styles.details}>
                <Text>Details Container</Text>
            </View>
        );
    }
}

export default DetailsContainer;
