import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schemas/loginSchema";
import { FilledBtn, Input, Title1, OutlinedBtn } from "../../styles/elements";
import { useContext } from "react";
import { AuthContext, iLogin } from "../../context/AuthContext";
import MainForm from "./styles";
import { Text } from "../../styles/text/text";
import Waves from "../../components/purpleWaves";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);

  const { register, handleSubmit } = useForm<iLogin>({
    resolver: yupResolver(loginSchema),
  });

  const submit = async (data: iLogin) => {
    loginUser(data);
  };

  return (
    <MainForm>
      <Link to="/">
        <i className='bx bx-arrow-back'></i>
      </Link>
      <form onSubmit={handleSubmit(submit)}>
        <Title1 tag="h1">Login</Title1>

        <Text tag="label" className="headline">
          E-mail:
        </Text>
        <Input
          id={"E-mail"}
          type={"email"}
          placeholder={"Digite seu email"}
          {...register("email")}
        />

        <Text tag="label" className="headline">
          Senha:
        </Text>
        <Input
          id={"Senha"}
          type={"password"}
          placeholder={"Digite sua senha"}
          {...register("password")}
        />

        <FilledBtn type="submit">Autenticar-se</FilledBtn>
        <hr />
        <span> ou </span>
        <Link to="/register">
          <OutlinedBtn>Criar sua conta</OutlinedBtn>
        </Link>
      </form>
      <Waves />
    </MainForm>
  );
};

export default LoginPage;
