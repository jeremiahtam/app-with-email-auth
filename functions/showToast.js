import axios from 'axios'
import Toast from 'react-native-toast-message';

const showToast = (type,text1,width) => {
  Toast.show({
    type: type,
    text1: text1,
    position: 'bottom',
    props: {
      width: width
    }
  });
}
export default showToast