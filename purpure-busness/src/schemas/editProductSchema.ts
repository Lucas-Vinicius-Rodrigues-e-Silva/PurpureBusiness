import * as yup from "yup";

export const editProductSchema = yup.object().shape({
    product_name: yup.string().required("O nome do produto é obrigatório!"),
    product_value: yup.number().required("O valor do produto é obrigatório!"),
})