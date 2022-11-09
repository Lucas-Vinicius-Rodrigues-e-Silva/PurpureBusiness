import styled from "styled-components";
export const StyledDivEditProductModalBtn = styled.div`
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
`

export const StyledDivEditProductModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 390px;
  height: 250px;

  > div {
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 10%;
    > h2 {
      font-weight: 400;
    }
    > button {
      outline: none;
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 90%;
    height: 90%;
    margin-top: 1rem;

    > input {
      margin-top: 0.3rem;
    }

    > div {
      width: 100%;
      height: 60%;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }

    > button {
      margin-top: 1rem;
      border-radius: 15px;
      height: 50%;
    }
  }
  .priceInput {
    display: flex;
    flex-direction: column;
    width: 40%;

    > input {
      width: 90%;
      margin-top: 0.3rem;
      border-radius: 10px;
    }
  }

  .inventoryInput {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 40%;

    > input {
      width: 80%;
      margin-top: 0.3rem;
      border-radius: 10px;
    }
  }
`;