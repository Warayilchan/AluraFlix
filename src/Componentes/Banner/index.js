import './Banner.css'
import { useState } from 'react'; 

function Banner () {
    const [showVideo, setShowVideo] = useState(false); 

    const handleVideoClick = () => {
        setShowVideo(true); 
    }

    return (
        <>
        <section className="banner"> 
            <div className="retangulo"></div>
            <div>
                <img src="/imgs/banner.png" alt="Banner principal do AluraFlix" />
            </div>
        
            <div className="textoBanner"> 
                <div className="container__texto">
                    <h1 className="titulo__grande"> Front-End </h1>
                
                    <h2 className="titulo"> SEO com React </h2>
                    
                    <p className="paragrafo"> Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app <br/> inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre <br/> performance e de quebra conhecer uma plataforma sensacional pra fazer deploy <br/> que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo <br/> construindo uma "Pokedex"! </p>
                </div>

                <div className="videoContainer">
                    {showVideo ? (
                        <iframe
                            width="747"
                            height="415"
                            src="https://www.youtube.com/embed/c8mVlakBESE"
                            title="SEO com React"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <img 
                            src="./imgs/player.png" 
                            alt="Imagem do vídeo principal do banner" 
                            onClick={handleVideoClick}
                        />
                    )}
                </div>
            </div>
        </section>
        </>
    )
}


export default Banner;