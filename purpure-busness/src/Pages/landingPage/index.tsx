import { Link } from "react-router-dom"
import { FilledBtn, OutlinedBtn, Title2 } from "../../styles/elements"
import { LandingPageStyle } from "../../styles/landingPage"


export const LandingPage = () => {

    return (
        <LandingPageStyle>
            <title>PURPURE Business - Sua ferramenta de BI grátis!</title>
            <header>
                <Title2 tag="h1">PUR<span>PURE</span> Business</Title2>
                <Link to='/register'><OutlinedBtn>Começe grátis!</OutlinedBtn></Link>
            </header>
            <section>
                <div className="container">
                    <h2>
                        Toda simplicidade para o seu <span>PURO DESEMPENHO</span> empresarial.
                    </h2>
                    <div className="btnContainer">
                        <Link to='/login'><OutlinedBtn>Efetuar Login</OutlinedBtn></Link>
                        <hr />
                        <span>ou</span>
                        <Link to='/register'><FilledBtn>Criar sua conta</FilledBtn></Link>
                    </div>
                </div>
                <div className="apresentation" >
                    <a href="#down">
                        <h1>POR QUE UTILIZAR NOSSA SOLUÇÃO?</h1>
                        <i className='bx bxs-chevron-down' ></i>
                    </a>
                </div>
                <div className="containerValues">
                    <div className="valuesBoxes">
                        <h3>SIMPLICIDADE</h3>
                        <p>
                            Temos uma ferramenta totalmente intuitiva e dinâmica com propósito de agilizar seu dia a dia e apresentar resultados satisfatórios.
                        </p>
                    </div>
                    <div className="valuesBoxes">
                        <h3>AGILIDADE</h3>
                        <p>
                            Desenvolvido por quem prioriza a resolução das tarefas do dia a dia de forma ágil e de qualidade.
                        </p>
                    </div>
                    <div className="valuesBoxes">
                        <h3>TRANSPARÊNCIA</h3>
                        <p id="down">
                            Temos o compromisso em oferecer nossos serviços, bem como nosso suporte de forma totalmente transparente.
                        </p>
                    </div>
                </div>
            </section>
        </LandingPageStyle>
    )
}