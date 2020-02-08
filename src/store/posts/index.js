const initialState = {
  loading: false,
  error: null,
  post: []
};



export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case "posts/GET_LATEST_POSTS": {
      // => Ask yourself: what is action.payload?
      return [];
    }
    case "posts/SET_LOADING": {
      return { ...state, loading: true };
    }
    default: {
      return state;
    }
  }
}
