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
    background-color: #4ecb71;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    color: white;
    padding: 0.5em 0.8em;
    margin-right: 15px;
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
    justify-content: center;
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



#tableNoneMessage{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 1.5em;
    width: 100%;

    h2{
        margin-top: 1em;
        font-size: 1em;
    }

    p{
        font-size: .8em;

        span{
            background-color: #4ECB71;
            color: #fff;
            padding: .2em;
            border-radius: .5em;
        }
    }
}

`;
