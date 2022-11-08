import notFoundProducts from "../../img/NotFoundProducts.gif"
import { NotFoundProducts } from "../../styles/notFoundProducts"

export const NoProductsFound = () => {
    return (
        <NotFoundProducts>
        <h1>Parece que você ainda não tem produtos :/</h1>
        <h2>Mas fique a vontade para cadastrá-los! :D</h2>
        <img src={notFoundProducts} alt="Produto não encontrado!" />
        </NotFoundProducts>
    )
}