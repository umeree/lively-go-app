import {Navigation} from 'react-native-navigation';
import App from './App';

Navigation.registerComponent('com.tempreactnativeproj.SplashScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.tempreactnativeproj.SplashScreen',
            },
          },
        ],
      },
    },
  });
});
