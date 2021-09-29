import { useSelector } from "react-redux";

const Display = () => {
    const result = useSelector((state) => state.user);

    return(
        <div>
            <h1>{result.name}</h1>
            <p className="comments">{result.coments.map((coment) => (
                <span>{coment}</span>
            ))}</p>
        </div>
    )
}

export default Display