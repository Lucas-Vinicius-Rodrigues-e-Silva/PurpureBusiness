import styled from "styled-components";

export const StyledDivAddInventoryModalBtn = styled.div`
  width: 30%;
`;
export const StyledDivAddInventoryModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 390px;
  height: 210px;

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

    .productAndQuantity {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .productName {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        width: 60%;
        height: 100%;

        > label {
          width: 100%;
          margin: 0;
        }

        > select {
          margin-top: 0.3rem;
          width: 100%;
          height: 85%;
          border-radius: 10px;
        }
      }

      .actualInventory {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        width: 35%;
        height: 100%;

        > label {
            display:flex;
            justify-content:flex-end;
          width: 100%;
          height:20px;
          margin: 0;
        }

        > input {
          margin-top: 0.3rem;
          width: 60%;
          height: 85%;
          border-radius: 10px;
        }
      }
    }

    > button {
      margin-top: 1rem;
      border-radius: 15px;
      height: 30%;
    }
  }



`;
