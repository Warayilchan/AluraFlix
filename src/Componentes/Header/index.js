import "./Header.css";
import { Link, useLocation } from 'react-router-dom';  

function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <img src="/imgs/LogoMain.png" alt="Logo" />
            <div className="botoes__header">
                
                <Link to="/">
                    <button 
                        className={`botao__home ${location.pathname === '/' ? 'ativo' : ''}`}>
                        Home
                    </button>
                </Link>
                
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
