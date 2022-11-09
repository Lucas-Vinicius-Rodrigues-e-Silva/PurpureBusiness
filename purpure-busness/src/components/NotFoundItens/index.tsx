import noSearch from "../../img/noSearch.gif"
import { NoSearch } from "../../styles/notFound"

export const NoItensFound = () => {
    return (
        <NoSearch>
        <h1>Desculpe, não encontramos esse produto!</h1>
        <img src={noSearch} alt="Produto não encontrado!" />
        </NoSearch>
    )
}