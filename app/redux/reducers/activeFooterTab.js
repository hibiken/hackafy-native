import { SET_FOOTER_TAB } from '~/redux/actions/actionTypes';
const initialState = 'home';

const activeFooterTab = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOOTER_TAB:
      return action.tab;
    default:
      return state;
  }
}

export default activeFooterTab;

export const getActiveFooterTab = (state) => state;
