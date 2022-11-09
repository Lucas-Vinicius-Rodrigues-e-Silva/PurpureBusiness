import styled from "styled-components";

const MainForm = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  i{
    font-size: 2em;
    color: grey;
    padding: .5em;
    position: fixed;
    top: 0;
    left: 0;
  }

  i:hover{
    cursor: pointer;
    color: #7D02DD;
    background-color: #f0f0f0;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 40px;
    box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 25%);
    border-radius: 28px;
    background-color: white;
    width: 450px;
    z-index: 2;
  }

  form:not(:focus){
    @keyframes scaleup{
      from{
        scale: 0;
      }to{
        scale: 1;
      }}

    animation: scaleup 1s ease;
  }

  h1 {
    text-align: center;
  }
  hr {
    transform: translateY(20px);
  }
  span {
    text-align: center;
    background-color: white;
    width: 100px;
    z-index: 5;
    align-self: center;
    transform: translateY(-8px);
  }
  button {
    width: 100%;
  }
`;

export default MainForm;
