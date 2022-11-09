import UiDashboard from "../../components/Interface"
import { DashboardQuickCards, DashboardBallInfo, DashboardColumnInfo } from "../../styles/dashboardBase"
import { Title3 } from "../../styles/elements"

let exemplos = {
    nomeFantasia: "Empresa Tal LTDA",
    produtosCadastrados: "96",
    saldoMensal: "1.500,00",
    produtosEstoque: "42",
}

export const DashHome = () => {
    return (
        <UiDashboard companyName={exemplos.nomeFantasia}>
            <title>Dashboard | Purpure Business</title>
            <div id="mainDashboard">
                <div className="hot-info">
                    <DashboardBallInfo>
                        <span>{exemplos.produtosCadastrados}</span>
                        <Title3 tag="h3">Produtos cadastrados</Title3>
                    </DashboardBallInfo>
                    <DashboardColumnInfo>
                        <Title3 tag="h3">Saldo mensal</Title3>
                        <span>R$ {exemplos.saldoMensal}</span>
                    </DashboardColumnInfo>
                    <DashboardBallInfo>
                        <span>{exemplos.produtosEstoque}</span>
                        <Title3 tag="h3">Produtos em Estoque</Title3>
                    </DashboardBallInfo>
                </div>
                <div>
                    <h2>Ações rápidas</h2>
                    <section>
                        <DashboardQuickCards color="add">
                            <i className='bx bxs-plus-circle'></i>
                            <Title3 tag="h3">Cadastrar cliente</Title3>
                        </DashboardQuickCards>
                        <DashboardQuickCards color="edit">
                            <i className="bx bxs-pencil"></i>
                            <Title3 tag="h3">Editar Cliente</Title3>
                        </DashboardQuickCards>
                        <DashboardQuickCards color="delete">
                            <i className="bx bxs-minus-circle"></i>
                            <Title3 tag="h3">Deletar cliente</Title3>
                        </DashboardQuickCards>
                        <DashboardQuickCards color="add">
                            <i className="bx bxs-purchase-tag"></i>
                            <Title3 tag="h3">Vender produto</Title3>
                        </DashboardQuickCards>
                        <DashboardQuickCards color="add">
                            <i className="bx bxs-component"></i>
                            <Title3 tag="h3">Adicionar estoque</Title3>
                        </DashboardQuickCards>
                        <DashboardQuickCards color="add">
                            <i className="bx bx-cube-alt"></i>
                            <Title3 tag="h3">Cadastrar produto</Title3>
                        </DashboardQuickCards>
                    </section>
                </div>
            </div>
        </UiDashboard>
    )
}

export default DashHome