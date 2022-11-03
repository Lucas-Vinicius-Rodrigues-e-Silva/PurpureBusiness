import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { registerSchema } from "../../schemas/registerSchema";
import Api from "../../services/api";

const RegisterPage = () => {
  interface iFormRegister {
    CNPJ: string;
    password: string;
    confirmPassword: string;
    email: string;
    commercialName: string;
  }
  const { register, handleSubmit } = useForm<iFormRegister>({
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();

  const submit = async (data: iFormRegister) => {
    try {
      await Api.post("register", data);
      navigate("login");
    } catch (error) {
      const responseError = error;
      console.log(responseError);
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1>Cadastro</h1>
      <Input
        id={"CNPJ: "}
        type={"text"}
        placeholder={"Digite seu CNPJ"}
        register={register}
        keyName={"CNPJ"}
      />
      <Input
        id={"Senha: "}
        type={"password"}
        placeholder={"Digite sua senha"}
        register={register}
        keyName={"password"}
      />
      <Input
        id={"Repetir sua senha: "}
        type={"password"}
        placeholder={"Digite novamente sua senha"}
        register={register}
        keyName={"confirmPassword"}
      />
      <Input
        id={"email: "}
        type={"email"}
        placeholder={"Digite seu email para contato"}
        register={register}
        keyName={"email"}
      />
      <Input
        id={"Nome fantasia: "}
        type={"text"}
        placeholder={"Insira seu nome fantasia"}
        register={register}
        keyName={"commercialName"}
      />
      <Button type={"submit"} text={"Cadastrar empresa"} />
      <Link to={"/login"}>Efetuar login</Link>
    </form>
  );
};

export default RegisterPage;
