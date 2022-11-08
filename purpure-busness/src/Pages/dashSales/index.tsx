import { useContext } from "react"
import UiDashboard from "../../components/Interface"
import { SaleContext } from "../../context/SalesContext";
import { Table } from "./table";
import { SalesModal } from "../../components/Modal/salesModal";
import { BiSearchAlt2 } from "react-icons/bi";

let exemplos = {
    nomeFantasia: "Empresa Tal LTDA",
}

export const SalesPage = () => {

    const { setSaleModalIsOpen, filter, setFilter, salesFiltered } = useContext(SaleContext)

    return (
        <UiDashboard companyName={exemplos.nomeFantasia} >
            <title>Vendas | Purpure Business</title>
            <SalesModal></SalesModal>
            <div>
                <h1>Histórico de vendas</h1>
                <div>
                    <button onClick={() => setSaleModalIsOpen(true)}>Vender</button>
                    <div>
                        <input type="text" onChange={(e) => setFilter(e.target.value)} />
                        <BiSearchAlt2 onClick={() => salesFiltered(filter)}/>
                    </div>
                </div>
            </div>
            <section>
                <Table />
            </section>
        </UiDashboard>
    )
}