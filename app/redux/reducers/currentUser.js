import { AUTH_REQUEST_SUCCESS } from '~/redux/actions/actionTypes';

const initialState = {
  id: null,
  attributes: {},
  postIds: [],
  followingIds: [],
  followerIds: [],
  likedPostIds: [],
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST_SUCCESS:
      return {
        id: action.payload.id,
        attributes: action.payload.attrs,
        postIds: action.payload.postIds,
        followingIds: action.payload.followingIds,
        followerIds: action.payload.followerIds,
        likedPostIds: action.payload.likedPostIds,
      }
    default:
      return state;
  }
}

export default currentUser;
