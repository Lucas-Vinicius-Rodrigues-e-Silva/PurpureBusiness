import { useState } from "react"
import Waves from "../../components/purpleWaves"
import { ModalWhy } from "./elements"
import { ErrorPage, OutlinedBtn, Title2, WhiteBtn } from "../../styles/elements"
import { Link } from "react-router-dom"

export const NotAllowed = () => {

    const [hideModal, setHideModal] = useState(false)

    function explainWhy() {
        return (
            <ModalWhy>
                <div>
                    <section>
                        <Title2 tag="h1">Por quê?</Title2>
                        <i className="bx bx-x" onClick={() => setHideModal(!hideModal)}></i>
                    </section>
                    <article>
                        <p>Nosso objetivo é fornecer um sistema dinâmico, fácil e altamente eficaz. Reduzir toda a ferramenta no tamanho de uma tela colapsaria diretamente com um destes conceitos, estamos revisando meios de torná-la compatível! Mas por enquanto você conseguirá utilizá-la apenas em um Micro (Desktop)</p>
                        <Link to="/"><OutlinedBtn>Voltar para o início</OutlinedBtn></Link>
                    </article>
                </div>
            </ModalWhy>
        )
    }

    return (
        <>
            {hideModal && explainWhy()}
            <ErrorPage>
                <title>Dispositivo não suportado | Purpure Business</title>
                <h2>Desculpe!</h2>
                <p>Infelizmente este recurso não é compatível com este dispositivo!</p>
                <WhiteBtn onClick={() => setHideModal(!hideModal)}>?</WhiteBtn>
                <Waves />
            </ErrorPage>
        </>
    )
}

export default NotAllowed