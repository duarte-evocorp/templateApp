import Toast from 'react-native-simple-toast';

import { ToastSettings } from '../../constants';

const MyToast = ({ message, position = 'center' }) => {

   if (message) {
      if (position === ToastSettings.positions.top) {
         Toast.showWithGravity(message, Toast.LONG, Toast.TOP);
      } else if (position === ToastSettings.positions.bottom) {
         Toast.showWithGravity(message, Toast.LONG, Toast.BOTTOM);
      } else {
         Toast.showWithGravity(message, Toast.LONG, Toast.CENTER);
      }
   }
};

export default MyToast;