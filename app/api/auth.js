import { firebaseAuth, facebookProvider } from '~/config/constants';
import { AccessToken, LoginManager } from 'react-native-fbsdk';

export const getAccessToken = () => {
  return AccessToken.getCurrentAccessToken();
};

export const authWithToken = (accessToken) => {
  return firebaseAuth.signInWithCredential(facebookProvider.credential(accessToken));
};

export const logout = () => {
  LoginManager.logOut();
  firebaseAuth.signOut();
};
