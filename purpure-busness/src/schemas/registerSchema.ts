import * as yup from "yup";

export const registerSchema = yup.object().shape({
  CNPJ: yup
    .string()
    .required("O CNPJ é obrigatório")
    .matches(
      // eslint-disable-next-line
      /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
      "Insira o CNPJ nesse formato 99.999.999/0001-99"
    ),
  password: yup.string().required("A senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não coincidem")
    .required("A confirmação de senha é obrigatória"),
  email: yup.string().required("O email é obrigatório"),
  commercialName: yup.string().required("O Nome fantasia é obrigatório"),
});
