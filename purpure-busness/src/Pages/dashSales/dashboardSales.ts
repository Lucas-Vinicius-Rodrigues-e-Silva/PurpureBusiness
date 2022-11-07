import styled from "styled-components";

export const HeaderSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;

  margin: 0 auto;

  margin-bottom: 20px;

  div {
    display: flex;
    justify-content: space-around;

    width: 50%;
  }

  /* input {
    background-color: #fbfbfb;

    padding: 5px 10px;

    border-radius: 15px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

    &&:focus {
      outline: 1px solid black;
    }
  } */
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
