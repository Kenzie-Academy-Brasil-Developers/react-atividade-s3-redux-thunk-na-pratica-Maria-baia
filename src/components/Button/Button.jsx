import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";
import { useState } from "react";

const Button = () => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState()

    return (
        <>
            <input placeholder="Comment..." onChange={(event) => setComment(event.target.value)}/>
            <button onClick={() => dispatch(addCommentThunk(comment))}>New comment</button>
        </>
    )
}

export default Button