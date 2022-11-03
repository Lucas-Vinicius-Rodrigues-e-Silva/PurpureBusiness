import { Link } from "react-router-dom"
import { LandingPageStyle } from "../../styles/landingPage"


export const LandingPage = () => {

    return (
        <LandingPageStyle>
            <header>
                <div>
                    <p>PUR<span>PURE</span></p> 
                    <p> Business</p>
                </div>
                <Link className="landingPageBtn1" to={'/register'}>Começar Grátis</Link>
            </header>
            <section>
                <div className="container">
                    <h2>
                        Toda simplicidade para o seu <span>PURO DESEMPENHO</span> empresarial.
                    </h2>
                    <div className="btnContainer">
                        <Link className="landingPageBtn1" to={'/login'}>Efetuar Login</Link>
                        <span>ou</span>
                        <Link className="landingPageBtn2" to={'/register'}>Criar sua conta</Link>
                    </div>
                </div>
                <div className="apresentation">
                    <h1>POR QUE UTILIZAR NOSSA SOLUÇÃO?</h1>
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
                            Desenvlvido por quem prioriza a resolução das tarefas do dia a dia de forma ágil e de qualidade.
                        </p>
                    </div>
                    <div className="valuesBoxes">
                        <h3>TRANSPARÊNCIA</h3>
                        <p>
                            Temos o compromisso em oferecer nossos serviços, bem como nosso suporte de forma totalmente transparente.
                        </p>
                    </div>
                </div>
            </section>
        </LandingPageStyle>
    )
}