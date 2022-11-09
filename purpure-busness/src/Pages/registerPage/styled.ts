import styled from "styled-components";

const MainRegister = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    position: relative;
    top: 25px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 25%);
    border-radius: 28px;
    background-color: white;
    width: 450px;
    z-index: 2;
  }

  form:not(:focus){
    @keyframes scaleUp{
      from{
        transform: scale(0);
      }to{
        transform: scale(1);
      }
    }

    animation: scaleUp .5s ease-in-out forwards;
  }

  h1 {
    text-align: center;
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
    margin-top: 10px;
  }

  input{
    margin-bottom: 10px;
  }

  .errorText {
    color: red;
    font-size: 12px;
    text-align: center;
  }
`;

export default MainRegister;
