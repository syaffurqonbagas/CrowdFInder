import { GET_COMMENT_BEGIN, GET_COMMENT_SUCCESS, GET_COMMENT_FAIL } from "../action/type";

const initialState = {
    listComment: [],
    loading: false,
    error: null,

}

const comments = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
        case GET_COMMENT_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case GET_COMMENT_SUCCESS:
            return {
                ...state,
                listComment: [...payload, ...state.listComment],
                loading: false,
                error: null,
            };
        case GET_COMMENT_FAIL:
            return {
                ...state,
                loading: false,
                error: error,
            }
        default:
            return {
                ...state,
            };
    }
}

export default comments;