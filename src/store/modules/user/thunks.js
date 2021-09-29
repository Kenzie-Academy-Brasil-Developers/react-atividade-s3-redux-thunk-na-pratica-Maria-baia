import { addComment } from "./actions";

export const addCommentThunk = (comment) => {
    return(dispatch,getState) => {
        const {user} = getState();
        const updatedUser = { ...user, coments: [...user.coments, comment] };
        dispatch(addComment(updatedUser));
    };
};