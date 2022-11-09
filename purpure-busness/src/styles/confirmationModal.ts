import styled from "styled-components";

export const ConfirmationModalStyledBtns = styled.div`
 height: 27px;
  width: 50px;

  > button {
    width:40px;
    height:25px;
    outline: none;
    border: none;
    cursor: pointer;
    background: #f24e1e;
    color:white;
    border-radius:10px;;
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
