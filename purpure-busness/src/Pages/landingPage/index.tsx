import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../../services/api"
import { FilledBtn, OutlinedBtn, Title2 } from "../../styles/elements"
import { LandingPageStyle } from "../../styles/landingPage"


export const LandingPage = () => {

    const [informations, setInformations] = useState("")

    async function fistSetUp() {
        if (localStorage.length === 2) {
            const id = localStorage.getItem("@USER_ID")
            const token = localStorage.getItem("@accessToken")
            try {
                api.defaults.headers.authorization = `Bearer ${token}`;
                const response = await api.get(`users/${id}?_embed=clients`)
                const { commercialName } = response.data;
                setInformations(commercialName)
            } catch (err) {
                localStorage.clear()
            }
        }
    }
    fistSetUp()

    function quickLogout() {
        localStorage.clear()
        setInformations("")
        toast.info("Sessão encerrada!")
    }

    function handleRestore() {
        if (informations.length !== 0 && localStorage.length === 2) {
            return (
                <>
                    <Link to='/dashboard'><OutlinedBtn>Continuar como <b>{informations}</b></OutlinedBtn></Link>
                    <hr />
                    <span>ou</span>
                    <a onClick={quickLogout}><FilledBtn>Encerrar seção</FilledBtn></a>
                </>
            )
        } else {
            return (
                <>
                    <Link to='/login'><OutlinedBtn>Efetuar Login</OutlinedBtn></Link>
                    <hr />
                    <span>ou</span>
                    <Link to='/register'><FilledBtn>Criar sua conta</FilledBtn></Link>
                </>
            )
        }
    }
    return (
        <LandingPageStyle id="landingPage">
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
                        {handleRestore()}
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