import React from 'react';
import { BackHandler } from 'react-native';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
// Components
import AppNavigator from './AppNavigator';

const App = createReduxContainer(AppNavigator);

class ReduxNavigation extends React.Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        const { nav, dispatch } = this.props;
        if (nav.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const { data, dispatch, nav } = this.props;

        return <App state={nav} dispatch={dispatch} data={data} />;
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        dispatch: state.nav.dispatch,
        nav: state.nav,
    };
};

export default connect(mapStateToProps)(ReduxNavigation);
