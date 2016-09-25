import {
  AUTH_REQUEST_SUCCESS,
  LIKE_POST,
  UNLIKE_POST,
} from '~/redux/actions/actionTypes';

const initialState = {
  id: null,
  attributes: {},
  postIds: [],
  followingIds: [],
  followerIds: [],
  likedPostIds: [],
};

const likedPostIds = (state = initialState.likedPostIds, action) => {
  switch (action.type) {
    case LIKE_POST:
      return [...state, action.id];
    case UNLIKE_POST:
      return state.filter(id => id !== action.id)
    default:
      return state;
  }
}

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
    case LIKE_POST:
    case UNLIKE_POST:
      return {
        ...state,
        likedPostIds: likedPostIds(state.likedPostIds, action),
      }
    default:
      return state;
  }
}

export default currentUser;

export const getCurrentUser = (state) => state.attributes;
export const getPostIds = (state) => state.postIds;
export const getFollowingIds = (state) => state.followingIds;
export const getFollowerIds = (state) => state.followerIds;
export const getLikedPostIds = (state) => state.likedPostIds;
