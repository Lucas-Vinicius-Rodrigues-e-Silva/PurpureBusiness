import * as yup from "yup";

export const searchProductSchema = yup.object().shape({
    searchProduct: yup.string().required("O nome do produto é obrigatório!"),
})