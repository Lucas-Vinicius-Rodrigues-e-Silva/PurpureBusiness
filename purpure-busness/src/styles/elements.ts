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