import styled from "styled-components";

export const LandingPageStyle = styled.main`

    header {

        display: flex;
        justify-content: space-between;

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        height: 45px;

        div {
            display: flex;

            p {
                padding-right: 5px;
            }
        }
    }

    section {

        background-image: linear-gradient(to right, #7D00DD, white);
        text-align: center;
        height: 90vh;

       .apresentation {
            background-color: white;
            height: 80px;

            display: flex;
            align-items: center;
            justify-content: center;

            h1 {
                margin-top: 10px;
            }
       }

       .btnContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            width: 136px;
            height: 77px;
            margin: 0 auto;
       }

       .valuesBoxes {
            border-radius: 10px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            background-color: white;
            margin: 15px;
            padding: 10px;
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