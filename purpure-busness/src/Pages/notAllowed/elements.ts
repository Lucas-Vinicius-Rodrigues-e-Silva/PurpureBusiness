import styled from 'styled-components'

export const ModalWhy = styled.span`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);

    div{
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 10px;
        width: 80%;
        padding: 1em;
    }

    a{
        display: block;

        button{
            margin-top: 2em;
            width: 100%;
        }
    }

    section{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1em;
    }

    section i{
        font-size: 2.5em;
        cursor: pointer;
        color: gray;
    }

    article p{
        font-size: 1em;
        color: black;
        font-weight: normal;
    }
`
