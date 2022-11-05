import * as yup from "yup";

export const NewProductSchema = yup.object().shape({
    product_name: yup.string().required("O nome do produto é obrigatório!"),
    product_value: yup.number().required("O valor do produto é obrigatório!"),
    product_stock: yup.number().required("A quantidade de produto é obrigatória!")
})