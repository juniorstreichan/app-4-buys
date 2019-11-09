import {AppRegistry, YellowBox} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings(['UNSAFE_']);
AppRegistry.registerComponent(appName, () => App);
