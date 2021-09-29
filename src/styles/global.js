import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        background-color: #e63946;
        color: #f1faee;
        display: flex;
        justify-content: center;
        text-align: center;
    }
    
    h1 {
        font-size: 50px;
    }

    .comments {
        display: flex;
        flex-direction: column;
        font-size: 20px;
    }

    span {
        background-color: #a8dadc;
        margin: 5px;
        border-radius: 5px;
        height: 35px;
    }

    input, button {
        background-color: #457b9d;
        border: none;
        margin-right: 10px;
        height: 30px;
        border-radius: 5px;
        color: #f1faee;
        font-size: 15px;
        ::placeholder {
            color: #e63946;
        }
    }

    button {
        background-color: #a8dadc;
        color: #457b9d;
    }
`