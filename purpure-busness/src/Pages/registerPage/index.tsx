import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { registerSchema } from "./registerSchema";

const RegisterPage = () => {
  interface iFormRegister {
    CNPJ: string;
    password: string;
    confirmPassword: string;
    email: string;
    userName: string;
  }
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<iFormRegister>({
    resolver: yupResolver(registerSchema),
  });

  const submit = (data: iFormRegister) => {
    console.log(data);
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
        keyName={"userName"}
      />
      <Button type={"submit"} text={"Cadastrar empresa"} />
      <Link to={"/login"}>Efetuar login</Link>
    </form>
  );
};

export default RegisterPage;
