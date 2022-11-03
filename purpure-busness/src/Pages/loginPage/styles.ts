import styled from "styled-components";

const MainForm = styled.main`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 40px;
    box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 25%);
    border-radius: 28px;
    background-color: white;
    width: 350px;
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
