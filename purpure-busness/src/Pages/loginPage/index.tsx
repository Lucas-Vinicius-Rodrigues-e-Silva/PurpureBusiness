import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "./loginSchema";
import { FilledBtn, Input, Title1 } from "../../styles/elements";

interface iFormLogin {
  CNPJ: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<iFormLogin>({
    resolver: yupResolver(loginSchema),
  });

  const submit = async (data: iFormLogin) => {
    // inserir a lógica da Api
    console.log(data);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(submit)}>
        <Title1 tag="h1">Login</Title1>
        <Input
          id={"CNPJ"}
          type={"text"}
          placeholder={"Digite seu CNPJ"}
          {...register("CNPJ")}
        />
        <Input
          id={"Senha"}
          type={"password"}
          placeholder={"Digite sua senha"}
          {...register("password")}
        />

        <FilledBtn type="submit">Autenticar-se</FilledBtn>
        <span> ou </span>
        <Link to="/register">Crie sua conta</Link>
      </form>
    </main>
  );
};

export default LoginPage;
