import React from 'react';
// Native components
import { Text, View } from 'react-native';
// Styles
import styles from './styles';

class ListContainer extends React.Component {
    static navigationOptions = () => ({
        title: 'List',
    });

    render() {
        return (
            <View style={styles.list}>
                <Text>List Container</Text>
            </View>
        );
    }
}

export default ListContainer;
