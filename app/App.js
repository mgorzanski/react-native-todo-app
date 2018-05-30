import React from 'react';
import { AsyncStorage, AppState } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Tasks from './screens/Tasks';
import Settings from './screens/Settings';
import { store } from './store';
import { Provider } from 'react-redux';
import { Root } from 'native-base';

const StackNavigator = createStackNavigator({
    Tasks: Tasks,
    Settings: Settings
});

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isStoreLoading: false,
          store: store()
        }
    }

    componentWillMount() {
      const self = this;
      this.setState({ isStoreLoading: true });
      AsyncStorage.getItem('completeStore').then((value) => {
          if (value && value.length) {
              let initialStore = JSON.parse(value);
              self.setState({ store: store(initialStore) });
          } else {
              self.setState({ store: store() });
          }
          self.setState({ isStoreLoading: false });
      }).catch(() => {
          self.setState({ store: store(), isStoreLoading: false });
      }).then(() => {
          AppState.addEventListener('change', this._handleAppStateChange.bind(this));
      });
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange.bind(this));
    }

    _handleAppStateChange(currentAppState) {
        if (currentAppState === 'background') {
            let storingValue = JSON.stringify(this.state.store.getState());
            AsyncStorage.setItem('completeStore', storingValue);
        }
    }

    render() {
      if (this.state.isStoreLoading) {
          return (<Root></Root>);
      } else {
            return (
              <Root>
                  <Provider store={this.state.store}>
                      <StackNavigator />
                  </Provider>
              </Root>
            );
        }
    }
}