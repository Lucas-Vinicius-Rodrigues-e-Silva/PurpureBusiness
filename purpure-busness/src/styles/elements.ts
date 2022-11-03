import styled from "styled-components";
import { primaryColor, waveColors } from "./colors";
import { Text } from "./text/text";

export const FilledBtn = styled.button`
  background-color: ${primaryColor};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;

  &&:hover {
    cursor: pointer;
    background-color: ${waveColors.color2};
  }
`;

export const OutlinedBtn = styled.button`
  background-color: white;
  border: 1px solid ${primaryColor};
  color: ${primaryColor};
  border-radius: 5px;
  padding: 10px 20px;

  &&:hover {
    background-color: ${waveColors.color1};
    cursor: pointer;
  }
`;
export const Input = styled.input`
  border: 1px solid transparent;
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 10px 20px;

  &&:focus {
    outline: 1px solid black;
  }
`;

export const Title1 = styled(Text)`
  font-size: 25px;
  font-weight: 900;
  color: black;
`;

export const Title2 = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  color: black;
`;

export const Title3 = styled(Text)`
  font-size: 18px;
  font-weight: normal;
  color: black;
`;

export const Headline = styled(Text)`
  font-size: 12px;
  font-weight: normal;
  color: black;
`;

export const HeadlineBold = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  color: black;
`;

export const Small = styled(Text)`
  font-size: 10px;
  font-weight: normal;
  color: black;
`;

export const WhiteBtn = styled.button`
  background-color: white;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 5px 20px;
  font-weight: bold;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);

  &&:hover{
    cursor: pointer;
    background-color: #f2f2f2;
  }
`

export const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  gap: 20px;

  h2{
    color: white;
    font-size: 30px;
    font-weight: 800;
  }

  p{
    color: white;
    font-size: 20px;
    font-weight: bolder;
  }

  background: rgb(125,2,221);
  background: -moz-linear-gradient(140deg, rgba(125,2,221,1) 32%, rgba(79,0,255,1) 100%);
  background: -webkit-linear-gradient(140deg, rgba(125,2,221,1) 32%, rgba(79,0,255,1) 100%);
  background: linear-gradient(140deg, rgba(125,2,221,1) 32%, rgba(79,0,255,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7d02dd",endColorstr="#4f00ff",GradientType=1); 
`