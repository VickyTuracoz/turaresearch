import HOME_TYPES from "../types/homeType";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  BannerImageList: [],
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case HOME_TYPES.RESET_STATE:
      return initialState;

    case HOME_TYPES.GET_HOME_BANNER_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case HOME_TYPES.GET_HOME_BANNER_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        BannerImageList: action.payload,
      };

    case HOME_TYPES.GET_HOME_BANNER_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    default:
      return state;
  }
}
