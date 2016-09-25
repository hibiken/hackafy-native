import {
  handleAuthWithFirebase,
  onAuthChange,
  handleLogout,
} from './actionCreators/authentication';
import { fetchPosts } from './actionCreators/fetchPosts';
import { setFooterTab } from './actionCreators/activeFooterTab';

export {
  handleAuthWithFirebase,
  onAuthChange,
  handleLogout,
  fetchPosts,
  setFooterTab,
};
