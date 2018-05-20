import { AppRegistry } from 'react-native';
import App from './app/App';
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
AppRegistry.registerComponent('reactnativetodoapp', () => App);
