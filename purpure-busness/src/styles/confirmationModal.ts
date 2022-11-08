import styled from "styled-components";

export const ConfirmationModalStyledBtns = styled.div`
  height: 24px;
  width: 24px;

  > button {
    outline: none;
    background: transparent;
    border: none;
    position: absolute;
    left: 1300px;
    cursor: pointer;
  }
`;

export const ConfirmationModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 390px;
  height: 150px;

  > h2 {
    font-size: 20px;
    width: fit-content;
    font-weight: 500;
  }

  > h3 {
    font-size: 16px;
    line-height: 10px;
    font-weight: 500;
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }

  .btnConfirm {
    border-radius: 15px;
    width: 45%;
    height: 150%;
  }

  .btnRegreat {
    border-radius: 15px;
    width: 45%;
    height: 150%;
  }
`;
