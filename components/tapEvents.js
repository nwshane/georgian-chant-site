// Needed for onTouchTap
// https://stackoverflow.com/questions/24335821/can-i-fastclick-reactjs-running-in-cordova/34015469#34015469
import injectTapEventPlugin from 'react-tap-event-plugin';
try {
  injectTapEventPlugin();
} catch (e) {
  // Do nothing, just preventing error
}
