import { Link } from "react-router-dom"
import Waves from "../../components/purpleWaves"
import { WhiteBtn, ErrorPage } from "../../styles/elements"

export const NotFound = () => {
    return (
        <ErrorPage>
            <title>404 | Purpure Business</title>
            <h2>OPS!</h2>
            <p>Parece que a página que você tentou acessar não existe!</p>
            <Link to="/">
                <WhiteBtn>Voltar</WhiteBtn>
            </Link>
            <Waves />
        </ErrorPage>
    )
}