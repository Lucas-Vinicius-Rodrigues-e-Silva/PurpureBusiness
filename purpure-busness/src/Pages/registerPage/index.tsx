import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Wave from "react-wavify";
import Waves from "../../components/purpleWaves";
import { AuthContext, iRegister } from "../../context/AuthContext";
import { registerSchema } from "../../schemas/registerSchema";
import { Title1, Input, FilledBtn, OutlinedBtn } from "../../styles/elements";
import { Text } from "../../styles/text/text";
import MainRegister from "./styled";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({
    resolver: yupResolver(registerSchema),
  });

  const submit = async (data: iRegister) => {
    registerUser(data);
  };

  return (
    <MainRegister>
      <form onSubmit={handleSubmit(submit)}>
        <Title1 tag="h1">Cadastro</Title1>

        <Text tag="label" className="headline">
          CNPJ:
        </Text>
        <Input
          id={"CNPJ"}
          type={"text"}
          placeholder={"Digite seu CNPJ"}
          {...register("CNPJ")}
        />
        <Text tag="p" className="headline small errorText">
          {errors?.CNPJ?.message}
        </Text>

        <Text tag="label" className="headline">
          Senha:
        </Text>
        <Input
          id={"Senha"}
          type={"password"}
          placeholder={"Digite sua senha"}
          {...register("password")}
        />
        <Text tag="p" className="headline small errorText">
          {errors?.password?.message}
        </Text>

        <Text tag="label" className="headline">
          Confirme sua senha:
        </Text>
        <Input
          id={"confirmPassword"}
          type={"password"}
          placeholder={"Digite novamente sua senha"}
          {...register("confirmPassword")}
        />
        <Text tag="p" className="headline small errorText">
          {errors?.confirmPassword?.message}
        </Text>

        <Text tag="label" className="headline">
          E-mail:
        </Text>
        <Input
          id={"email: "}
          type={"email"}
          placeholder={"Digite seu email"}
          {...register("email")}
        />
        <Text tag="p" className="headline small errorText">
          {errors?.email?.message}
        </Text>

        <Text tag="label" className="headline">
          Nome Fantasia:
        </Text>
        <Input
          id={"commercialName"}
          type={"text"}
          placeholder={"Insira seu nome fantasia"}
          {...register("commercialName")}
        />
        <Text tag="p" className="headline small errorText">
          {errors?.commercialName?.message}
        </Text>

        <FilledBtn type="submit">Cadastrar empresa</FilledBtn>

        <Link to={"/login"}>
          <OutlinedBtn>Efetuar login</OutlinedBtn>
        </Link>
      </form>
      <Waves />
    </MainRegister>
  );
};

export default RegisterPage;
