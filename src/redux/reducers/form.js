import { POST_EVENT } from "../action/type";


const initialState = {
    event : []
}

const events = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case POST_EVENT:
            return {
                ...state,
                event : payload,
            };
        default :
            return {
                ...state,
            };
    }

}

export default events