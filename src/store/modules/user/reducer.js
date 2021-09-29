import { ADD_COMMENT } from "./actionType";

const initialState = {
    name: "Kenzie",
    coments:[]
};

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_COMMENT:
            return action.updateUser;
        default:
            return state;
    }
};

export default userReducer