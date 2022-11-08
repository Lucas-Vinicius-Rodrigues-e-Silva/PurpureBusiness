import ReactModal from "react-modal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { iSales, SaleContext } from "../../../context/SalesContext";
import './modal.css';

const formSchema = yup.object().shape({
    cliente_sale_product: yup.string().required('campo obrigatório'),
    product_sale: yup.string().required('campo obrigatório'),
    product_sale_quant: yup.number().required('campo obrigatório'),
    total_sale_value: yup.number().required('campo obrigatório'),
})

const clients = [
    {
        client_name: 'pipoquinha maluca'
    },
    {
        client_name: 'vendinha maluca'
    },
    {
        client_name: 'sinuquinha maluca'
    },
]

const products = [
    {
        product_name: 'cerveja'
    },
    {
        product_name: 'vinho'
    },
    {
        product_name: 'suco de laranja'
    },
]

export const SalesModal = () => {

    const { registerSale, saleModalIsOpen, setSaleModalIsOpen} = useContext(SaleContext)

    const {
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm <iSales> ({
        resolver: yupResolver(formSchema)
    })
    
    const submit = (data:iSales) => {
        const id = localStorage.getItem('@USER_ID')
        const newData:iSales = {...data,
            userId: parseInt(`${id}`),
        }
        registerSale(newData)
        setSaleModalIsOpen(false)
    }

    return (
        <ReactModal
            isOpen={saleModalIsOpen}
            onRequestClose={() => setSaleModalIsOpen(false)}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <div>
                <h1>Vender Produto</h1>
                <span onClick={() => setSaleModalIsOpen(false)}>X</span>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <label htmlFor="">Selecionar o Cliente:</label>
                <select id="cliente_sale_product" {...register('cliente_sale_product')}> 
                    <option value="">Selecione o Produto:</option>
                    {
                        clients.map((client, i) => 
                        <option key={i} value={client.client_name}>{client.client_name}</option>
                        )
                    }
                </select>
                <p className="errorMsg">{errors.cliente_sale_product?.message}</p>
                <label htmlFor="">Selecionar o Produto:</label>
                <select id="product_sale" {...register('product_sale')} >
                    <option value="">Selecione o Produto:</option>
                    {
                        products.map((client, i) => 
                        <option key={i} value={client.product_name}>{client.product_name}</option>
                        )
                    }
                </select>
                <p className="errorMsg">{errors.product_sale?.message}</p>
                <div className="inputsBox">
                    <label htmlFor="">QTDE.:</label>
                    <input type="number" min={1} {...register('product_sale_quant')} />
                    <label htmlFor="">Valor desta operação:</label>
                    <input type="number" min={1} {...register('total_sale_value')} />
                </div>
                <div>
                    <button className="cancelBtn" onClick={() => setSaleModalIsOpen(false)}>Cancelar</button>
                    <button className="registerBtn" type="submit">Registrar venda</button>
                </div>
            </form>
        </ReactModal>
    )
}