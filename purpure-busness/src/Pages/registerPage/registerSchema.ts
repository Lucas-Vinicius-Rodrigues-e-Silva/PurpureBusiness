import * as yup from "yup";

export const registerSchema = yup.object().shape({
  CNPJ: yup.string().required("O CNPJ é obrigatório"),
  password: yup.string().required("A senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não coincidem")
    .required("A confirmação de senha é obrigatória"),
  email: yup.string().required("O email é obrigatório"),
  userName: yup.string().required("O Nome da empresa é obrigatório"),
});
