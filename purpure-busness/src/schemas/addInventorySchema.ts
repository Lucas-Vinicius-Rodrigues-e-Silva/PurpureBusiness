import * as yup from "yup";

export const addInventorySchema = yup.object().shape({
    product_name: yup.string().required("O nome do produto é obrigatório!"),
    product_stock: yup.number().required("O valor do produto é obrigatório!"),
})