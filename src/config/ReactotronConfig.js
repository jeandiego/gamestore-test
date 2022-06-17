import {NativeModules} from 'react-native';
import Reactotron, {overlay} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

const reactotron = Reactotron.configure({
  host,
  name: 'GAMESTORE - App Name',
  port: 9090,
})
  .use(reactotronRedux())
  .use(overlay())
  .connect();

console.tron = reactotron;

export default reactotron;
