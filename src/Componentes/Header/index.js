import "./Header.css"

function Header() {
    return (
        <header className="header">
            <img src="/imgs/LogoMain.png"/>
                <div className="botoes">
                    <button className="botao__home"> Home </button>
                    <button className="botao__novoVid"> Novo Vídeo </button>
                </div>
        </header>
    )
}

export default Header;