import styled from "styled-components";
export const StyledInventoryPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;

  > section {
    width: 95%;
    height: 90%;
  }

  .pageHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 15%;

  }
  .nameAndResetFilter {
    display: flex;
    justify-content: space-between;
    width: 18%;
  }

  .navHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35%;

    > form {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 65%;

      > input {
        width: 95%;
        background: #f9f9f9;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px 0px 0px 15px;
      }

      > button {
        background: #f9f9f9;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 0px 15px 15px 0px;
        border: none;
        height: 38px;
        cursor: pointer;
      }
    }

    .btnReset {
      border-radius: 10px;
    }
  }
  td {
    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  }

  th,
  td {
    padding: 10px;
    text-align: center;
  }

  th {
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  }

  tr:hover:nth-child(1n + 2) {
    background-color: #ececec;
    transition: 0.25s;
  }

  tr:hover:nth-child(1n + 1) {
    background-color: #ececec;
    transition: 0.25s;
  }
`;
