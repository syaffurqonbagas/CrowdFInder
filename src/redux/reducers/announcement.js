import { POST_ANNOUNCEMENT } from "../action/type";


const initialState = {
    listAnnouncement : []
}

const announcements = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case POST_ANNOUNCEMENT:
            return {
                ...state,
                listAnnouncement : payload,
            };
        default :
            return {
                ...state,
            };
    }

}

export default announcements