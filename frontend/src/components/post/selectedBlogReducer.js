export const initialState = {
    blog: null,
    loading: true,
    error: null,
    isDeleted: false,
};

export const actionTypes = {
    SET_BLOG: "SET_BLOG",
    SET_LOADING: "SET_LOADING",
    SET_ERROR: "SET_ERROR",
    SET_IS_DELETED: "SET_IS_DELETED",
};

export function selectedBlogReducer(state, action) {
    switch (action.type) {
        case actionTypes.SET_BLOG:
            return { ...state, blog: action.payload };
        case actionTypes.SET_LOADING:
            return { ...state, loading: action.payload };
        case actionTypes.SET_ERROR:
            return { ...state, error: action.payload };
        case actionTypes.SET_IS_DELETED:
            return { ...state, isDeleted: action.payload };
        default:
            return state;
    }
}
