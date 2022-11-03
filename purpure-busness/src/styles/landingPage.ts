import styled from "styled-components";

export const LandingPageStyle = styled.main`

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

        padding: 0 15px;

        display: flex;
        justify-content: space-between;

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        height: 50px;

        div {
            display: flex;
            align-items: center;

            p {
                font-size: 16px;
                padding-right: 5px;
                font-weight: 900;

                span {
                    color: #7D02DD;
                }
            }
        }
    }

    section {

        background-image: linear-gradient(to right, #7D00DD, white);
        text-align: center;
        height: 100vh;

        .container {
            display: flex;
            height: 30%;
            justify-content: space-between;
            padding: 0 15px;

            h2 {
                color: white;
                font-size: 20px;
                font-weight: normal;
                margin-top: 35px;
                text-align: left;
                max-width: 300px;

                span {
                    font-weight: 600;
                }
            }
        }

        .containerValues {
            display: flex;
            justify-content: center;
        }

       .apresentation {
            background-color: white;
            height: 100px;

            display: flex;
            align-items: center;
            justify-content: center;

            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            h1 {
                font-weight: 900;
            }
       }

       .btnContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            width: 250px;
            height: 150px;
            margin: 35px 50px 0 0;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            .landingPageBtn1 {
                height: 30px;
                padding: 5px;
                margin-top: 30px; 
            }

            .landingPageBtn2 {
                height: 30px;
                padding: 5px;
            }
       }

       .valuesBoxes {
            border-radius: 10px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            background-color: white;
            width: 250px;
            margin: 100px 70px 0;
            padding: 10px;

            p {
                width: 100%;
                height: 100%;
            }
       }
    }

`