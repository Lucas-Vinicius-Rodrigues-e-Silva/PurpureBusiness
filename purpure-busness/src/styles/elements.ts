import styled from "styled-components";

export const FilledBtn = styled.button`
    background-color: #7D02DD;
    color: white;

    &&:hover {
        cursor: pointer;
        background-color: #8F00FF;
    }
`

export const OutlinedBtn = styled.button`
    background-color: white;
    border: 1px solid #7D02DD;
    color: #7D02DD;

    &&:hover {
        background-color: rgba(125,2,221,0.1);
        cursor: pointer;
    }
`
export const Input = styled.input`
    border: none;
    background-color: #f2f2f2;
    border-radius: 5px;

    &&:focus {
        outline: 1px solid black;
    }
`

export const Title1 = styled.h1`
    font-size: 15px;
    font-weight: 900;
    color: black;
`

export const Title2 = styled.h2`
    font-size: 12px;
    font-weight: bold;
    color: black;
`

export const Title3 = styled.h3`
    font-size: 12px;
    font-weight: normal;
    color: black;
`

export const Headline = styled.p`
    font-size: 10px;
    font-weight: normal;
    color: black;
`

export const HeadlineBold = styled.p`
    font-size: 10px;
    font-weight: bold;
    color: black;
`

export const Small = styled.small`
    font-size: 7px;
    font-weight: normal;
    color: black;
`