import "./Header.css";
import { Link, useLocation } from 'react-router-dom';  

function Header() {
    const location = useLocation();  // Usamos o hook para pegar a URL atual

    return (
        <header className="header">
            <img src="/imgs/LogoMain.png" alt="Logo" />
            <div className="botoes">
                
                {/* Link para Home - aplica classe diferente se a URL for "/" */}
                <Link to="/">
                    <button 
                        className={`botao__home ${location.pathname === '/' ? 'ativo' : ''}`}>
                        Home
                    </button>
                </Link>
                
                {/* Link para Novo Vídeo - aplica classe diferente se a URL for "/novo-video" */}
                <Link to="/novo-video">
                    <button 
                        className={`botao__novoVid ${location.pathname === '/novo-video' ? 'ativo' : ''}`}>
                        Novo Vídeo
                    </button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
