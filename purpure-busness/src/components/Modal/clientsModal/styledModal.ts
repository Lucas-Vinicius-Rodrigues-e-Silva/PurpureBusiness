import styled from "styled-components";

export const StyledModalDelete = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 15px;

  h2 {
    width: 100%;
    height: 15px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 15px;

    text-align: center;

    color: #000000;
  }

  span {
    width: 100%;
    height: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    color: #000000;
    text-align: center;
  }

  .div_btn {
    display: flex;
    justify-content: space-between;
  }

  .btn {
    box-sizing: border-box;

    width: 119px;
    height: 41px;

    border: 1px solid #7d02dd;
    border-radius: 15px;
  }

  .confirm_btn {
    background: #ffffff;
    color: #7d02dd;
  }

  .confirm_btn:hover {
    background: rgba(125, 2, 221, 0.1);
    border: 1px solid #7d02dd;
  }

  .cancel_btn {
    background: #7d02dd;
    color: #fff;
  }

  .cancel_btn:hover {
    background: #8f00ff;
  }
`;

export const StyledModalEdit = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 15px;

  .modal_edit_header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  span {
    cursor: pointer;
  }

  h2 {
    height: 15px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 15px;

    text-align: center;

    color: #000000;
  }

  form {
    height: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: stretch;

    label {
      margin: 0px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 12px;
    }

    input {
      background: #f2f2f2;
      border-radius: 5px;
    }

    button {
      width: 100%;
      height: 41px;
      left: 437px;
      top: 377px;

      background: #7d02dd;
      border-radius: 15px;
      color: #fff;
      border: 1px solid #7d02dd;
    }

    button:hover {
      background: #8f00ff;
    }
  }
`;

export const StyledModalChose = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 15px;

  .modal_chose_header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  span {
    cursor: pointer;
  }

  h2 {
    height: 22px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    color: #000000;
  }

  form {
    height: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: stretch;

    label {
      margin: 0px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 12px;
    }

    input {
      background: #f2f2f2;
      border-radius: 5px;
    }

    button {
      width: 100%;
      height: 41px;
      left: 437px;
      top: 377px;

      background: #7d02dd;
      border-radius: 15px;
      color: #fff;
      border: 1px solid #7d02dd;
    }

    button:hover {
      background: #8f00ff;
    }
  }
`;
