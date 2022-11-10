import styled from "styled-components";
import { primaryColor } from "./colors";

export const LandingPageStyle = styled.main`

    .btnContainer a{
    width: 100%;
    button{
        width: 60%;
    }
}

    .landingPageBtn1 {
        text-decoration: none;
        border: 2px solid #7D02DD;
        color: #7D02DD;
        cursor: pointer;
        padding: 5px;
        height: 75%;
        margin: 3px 0;
    }

    .landingPageBtn2 {
        text-decoration: none;
        border-radius: 5px;
        color: white;
        background-color: #7D02DD;
    }

    h3 {
        padding: 10px 0;
    }

    header {

        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 0 .6em rgba(0, 0, 0, 0.5);
        background-color: white;
        padding: 1em 2em;

        span{
            color: ${primaryColor}
        }
    }

    section {
        background: rgb(125,2,221);
        background: -moz-linear-gradient(140deg, rgba(125,2,221,1) 32%, rgba(79,0,255,1) 100%);
        background: -webkit-linear-gradient(140deg, rgba(125,2,221,1) 32%, rgba(79,0,255,1) 100%);
        background: linear-gradient(140deg, rgba(125,2,221,1) 32%, rgba(79,0,255,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7d02dd",endColorstr="#4f00ff",GradientType=1); 
        text-align: center;
        height: calc(100vh + 10em);

        .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding:5em;

            h2 {
                color: white;
                font-size: 20px;
                font-weight: normal;
                margin-top: 35px;
                text-align: left;
                max-width: 300px;

                span {
                    font-weight: 800;
                }
            }
        }

        .containerValues {
            display: flex;
            justify-content: space-around;
            margin: 5em 0;
            padding: 1em;
        }

       .apresentation {
           display: flex;
           flex-direction: column;
           align-items: center;
           background-color: white;

            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            h1 {
                font-weight: 600;
                padding-top: 1em;
            }

            i{
                margin: 1em 0;
                font-size: 1.5em;
                animation: bounce 1s infinite;
            }

            a{
                text-decoration: none;
                color: black;
            }

            a:hover{
                i{
                    color: ${primaryColor};
                    font-weight: 800;
                }
            }

            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateY(0);
                    opacity: 1;
                }
                40% {
                    transform: translateY(-30px);
                    opacity: 0.5;
                }
                60% {
                    transform: translateY(-15px);
                    opacity: 0.8;
                }

            }

       }

       .btnContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: white;
            width: 20em;
            height: 12em;
            margin: 35px 50px 0 0;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            span{
                padding: 0 10px;
                z-index: 5;
                background-color: white;
                margin: 5px 0;
                transform: translateY(-2px);
            }

            hr{
                width: 60%;
                transform: translateY(15px);
            }
       }

       .valuesBoxes {
            border-radius: 10px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            background-color: white;
            width: 30%;
            padding: 10px;

            p {
                width: 100%;
                height: 100%;
            }

            @keyframes scaleUp{
                from{
                    transform: scale(1);
                }to{
                    transform: scale(1.1);
                }
            }

            @keyframes scaleDown{
                from{
                    transform: scale(1.1);
                }to{
                    transform: scale(1);
                }
            }

        }
        
        .valuesBoxes:hover {
            animation: scaleUp 0.5s forwards;
        }

        .valuesBoxes:not(:hover){
            animation: scaleDown 0.5s forwards;
        }
    }

    .landingPageBtn1 {
        text-decoration: none;
        border: 2px solid #7D02DD;
        cursor: pointer;
    }

    .landingPageBtn2 {
        text-decoration: none;
        border-radius: 5px;
        color: white;
        background-color: #7D02DD;
    }

`