import styled from "styled-components";

const MainRegister = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  }
`;

export default MainRegister;
