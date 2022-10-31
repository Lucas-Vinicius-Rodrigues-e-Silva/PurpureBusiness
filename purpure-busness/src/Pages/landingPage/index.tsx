import { Link } from "react-router-dom"


export const LandingPage = () => {

    return (
        <main>
            <header>
                <p>PUR</p><span>PURE</span> <p>Business</p>
                <button> <Link to={'/register'}>Começar Grátis</Link> </button>
            </header>
            <section>
                <h2>
                    Toda simplicidade para o seu PURO DESEMPENHO empresarial.
                </h2>
                <div>
                    <button> <Link to={'/login'}>Efetuar Login</Link> </button>
                    <span>ou</span>
                    <button> <Link to={'/register'}>Criar sua conta</Link> </button>
                </div>
            </section>
            <section>
                <h1>POR QUE UTILIZAR NOSSA SOLUÇÃO?</h1>
            </section>
            <section>
                <div>
                    <h3>SIMPLICIDADE</h3>
                    <p>
                        Temos uma ferramenta totalmente intuitiva e dinâmica com propósito de agilizar seu dia a dia e apresentar resultados satisfatórios.
                    </p>
                </div>
                <div>
                    <h3>AGILIDADE</h3>
                    <p>
                        Desenvlvido por quem prioriza a resolução das tarefas do dia a dia de forma ágil e de qualidade.
                    </p>
                </div>
                <div>
                    <h3>TRANSPARÊNCIA</h3>
                    <p>
                        Temos o compromisso em oferecer nossos serviços, bem como nosso suporte de forma totalmente transparente.
                    </p>
                </div>
            </section>
        </main>
    )
}