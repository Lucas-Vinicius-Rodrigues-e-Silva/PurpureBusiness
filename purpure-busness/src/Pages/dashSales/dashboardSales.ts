import styled from "styled-components";

export const HeaderSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;

  margin: 0 auto;

  margin-bottom: 20px;

  button {
    border-radius: 15px;
    border: none;
    background-color: #4ECB71;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    color: white;
    width: 65px;
    height: 20px;
    margin-right: 15px;
  }

  .btnSearch {
    display: flex;
  }

  .searchBar {
    background: #F9F9F9;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;

    input {
      border: none;
      padding-left: 10px;
      border-radius: 15px;
    }

    input:focus {
      box-shadow: 0;
      outline: 0;
    }

    svg {
      cursor: pointer;
      position: relative;
      right: 2%;
    }
  }

`;

export const TableContent = styled.table`
  margin: 0 auto;

  padding: 10px;
  width: 80%;

  background-color: #fbfbfb;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  border-radius: 15px;

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  th {
    width: 25%;
  }

  tbody {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }

  td {
    width: 25%;
    height: 10%;

    text-align: center;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;