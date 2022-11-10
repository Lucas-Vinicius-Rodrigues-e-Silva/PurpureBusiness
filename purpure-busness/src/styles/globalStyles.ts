import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
}

body{
    background-color: #f5f5f5;
}

div.loading{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
}

div.loading div.whiteBlock{
    background-color: #fff;
    padding: 3em;
    border-radius: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
}

.modal-overlay {
    background-color: rgba(18, 18, 20, 0.5);
  
    position: fixed;
    top: 0;
  
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  
  .modal-content {
    background-color: white;
    width: 500px;
    height: 330px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 10px;
  }

  .modal-content nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }

  .modal-content > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-content > div > span {
    cursor: pointer;
  }

  .modal-content > form {
    display: flex;
    flex-direction: column;
  }

  .modal-content > form > select {
    padding: 0 5px;
    height: 30px;
    border: none;
    border-radius: 10px;
    background-color: #F2F2F2;
    cursor: pointer;
  }

  .inputsBox {
    display: flex;
    align-items: center;
  }

  .inputsBox > input {
    background: #F2F2F2;
    border-radius: 10px;
    border: none;
    width: 50px;
    height: 30px;
  }

  label {
    margin: 10px;
  }

  .cancelBtn {
    width: 45%;
    height: 41px;
    border: 1px solid #7D02DD;
    border-radius: 10px;
    background-color: #fff;
    color: #7D02DD;
    margin: .5em;
  }

  .registerBtn {
    width: 45%;
    height: 41px;
    background-color: #7D02DD;
    color: white;
    border: none;
    border-radius: 10px;
    margin: .5em;
  }

  .errorMsg {
    font-size: 10px;
  }

  button {
    cursor: pointer;
  }

  .inputsBox{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1em;
  }

  .inputsBox section{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%
  }

  .inputsBox section div{
    display: flex;
    flex-direction: row;
  }

`;
