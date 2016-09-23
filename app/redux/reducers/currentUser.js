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

export const getCurrentUser = (state) => state.attributes;
export const getPostIds = (state) => state.postIds;
export const getFollowingIds = (state) => state.followingIds;
export const getFollowerIds = (state) => state.followerIds;
export const getLikedPostIds = (state) => state.likedPostIds;
