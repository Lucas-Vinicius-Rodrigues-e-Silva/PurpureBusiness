import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { loginSchema } from "./loginSchema";

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
        <h1>Login</h1>
        <Input
          id={"CNPJ"}
          type={"text"}
          placeholder={"Digite seu CNPJ"}
          register={register}
          keyName={"CNPJ"}
        />
        <Input
          id={"Senha"}
          type={"password"}
          placeholder={"Digite sua senha"}
          register={register}
          keyName={"password"}
        />

        <Button text={"Autenticar-se"} type={"submit"} />
        <span> ou </span>
        <Link to="/register">Crie sua conta</Link>
      </form>
    </main>
  );
};

export default LoginPage;
