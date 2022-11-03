import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { AuthContext, iRegister } from "../../context/AuthContext";
import { registerSchema } from "../../schemas/registerSchema";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);

  const { register, handleSubmit } = useForm<iRegister>({
    resolver: yupResolver(registerSchema),
  });

  const submit = async (data: iRegister) => {
    registerUser(data);
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
