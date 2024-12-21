export const initialState = {
    title: "",
    author: "",
    summary: "",
    loading: false,
    submitting: false,
    isCreated: false,
  };

  export const actionTypes = {
    SET_TITLE: "SET_TITLE",
    SET_AUTHOR: "SET_AUTHOR",
    SET_SUMMARY: "SET_SUMMARY",
    SET_LOADING: "SET_LOADING",
    SET_SUBMITTING: "SET_SUBMITTING",
    SET_IS_CREATED: "SET_IS_CREATED",
  };

  export function reducer(state, action) {
    switch (action.type) {
      case actionTypes.SET_TITLE:
        return { ...state, title: action.payload };
      case actionTypes.SET_AUTHOR:
        return { ...state, author: action.payload };
      case actionTypes.SET_SUMMARY:
        return { ...state, summary: action.payload };
      case actionTypes.SET_LOADING:
        return { ...state, loading: action.payload };
      case actionTypes.SET_SUBMITTING:
        return { ...state, submitting: action.payload };
      case actionTypes.SET_IS_CREATED:
        return { ...state, isCreated: action.payload };
      default:
        return state;
    }
  }