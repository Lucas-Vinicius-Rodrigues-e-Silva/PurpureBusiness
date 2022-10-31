import * as yup from "yup";

export const loginSchema = yup.object().shape({
  CNPJ: yup.string().required("O CNPJ é obrigatório"),
  password: yup.string().required("A senha é obrigatória"),
});
