import styled from "styled-components";

export const HeaderSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;

  margin: 0 auto;

  margin-bottom: 20px;

  .div_register {
    display: flex;
  }

  button {
    border: none;
    color: white;
    margin-right: 15px;
    width: auto;
    height: auto;
    left: 373px;
    top: 60px;
    background: #4ecb71;
    box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
    border-radius: 10px;
    padding: 4px 12px;
  }

  .btnSearch {
    display: flex;
  }

  .searchBar {
    background: #f9f9f9;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: flex;
    align-items: center;
    background-color: #fff;

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

  .icon {
    width: 35px;
    height: 20px;
    left: 514px;
    top: 121px;

    color: #fff;
    border-radius: 50px;

    cursor: pointer;
  }

  .edit_icon {
    background: #e4a951;
  }

  .delete_icon {
    background: #f24e1e;
  }

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
    display: flex;
    justify-content: center;
    gap: 15px;
  }
`;
