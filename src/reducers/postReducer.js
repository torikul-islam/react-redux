import { ADD_POST, DELETE_POST } from './../actions/types';

const PostReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POST:
            return [...state, action.payload];
        case DELETE_POST:
            return state.filter(post => post.id !== action.payload.id)
        default:
            return state;
    }

}

export default PostReducer;
