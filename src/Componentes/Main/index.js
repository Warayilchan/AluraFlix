import React, { useState, useEffect } from "react";
import "./Main.css";

function Main() {
    const [isEditing, setIsEditing] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [currentCard, setCurrentCard] = useState(null);
    const [currentCategory, setCurrentCategory] = useState("");
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/videos")
            .then((response) => response.json())
            .then((data) => setVideos(data));
    }, []);

    const handleEditClick = (card, category) => {
        setCurrentCard(card);
        setCurrentCategory(category);
        setIsEditing(true);
    };

    const closeEditForm = () => {
        setIsEditing(false);
        setCurrentCard(null);
        setCurrentCategory("");
    };

    const handleWatchClick = (video) => {
        const videoId = video.split("v=")[1]?.split("&")[0];
        setCurrentVideo(`https://www.youtube.com/embed/${videoId}`);
        setIsVideoOpen(true);
    };

    const closeVideoOverlay = () => {
        setIsVideoOpen(false);
        setCurrentVideo(null);
    };

    const handleAddVideo = (newVideo) => {
        const highestId = videos.reduce((maxId, video) => {
            return Math.max(maxId, parseInt(video.id));
        }, 0);

        const newId = (highestId + 1).toString();
        const videoWithId = { ...newVideo, id: newId };
        
        setVideos([...videos, videoWithId]);
    };

    const handleDeleteCard = (cardId) => {
        const confirmDelete = window.confirm("Você tem certeza que deseja deletar este vídeo?");
        if (confirmDelete) {
            // Enviar a requisição DELETE para o servidor
            fetch(`http://localhost:5000/videos/${cardId}`, {
                method: "DELETE",
            })
                .then((response) => {
                    if (response.ok) {
                        // Atualizar a lista de vídeos no estado
                        const updatedVideos = videos.filter((video) => video.id !== cardId);
                        setVideos(updatedVideos);
                        alert("Vídeo deletado com sucesso!");
                    } else {
                        alert("Erro ao deletar o vídeo.");
                    }
                })
                .catch((error) => {
                    console.error("Erro na requisição de deletação:", error);
                    alert("Erro na requisição.");
                });
        }
    };

    return (
        <section className="main">
            {/* Seção Front End */}
            <div className="FrontEnd">
                <h1 className="titulo__frontend">Front End</h1>
                <section className="cards__container--front">
                    {videos
                        .filter((video) => video.categoria === "Front End")
                        .map((card) => (
                            <div key={card.id} className="card__frontend">
                                <div className="card__image-container">
                                    <img
                                        className="imagem__card--front"
                                        src={card.imagem}
                                        alt={card.titulo}
                                    />
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title">{card.titulo}</h3>
                                    <p className="card__description">{card.descricao}</p>
                                </div>
                                <div className="card__options--front">
                                    <p
                                        className="paragrafo__options"
                                        onClick={() => handleDeleteCard(card.id)}
                                    >
                                        <img
                                            className="imagem__del"
                                            src="./imgs/Lixeira.png"
                                            alt="Deletar"
                                        />
                                        Deletar
                                    </p>
                                    <p
                                        className="paragrafo__options"
                                        onClick={() => handleWatchClick(card.video)}
                                    >
                                        <img
                                            className="imagem__play"
                                            src="./imgs/botao-play.png"
                                            alt="Play"
                                        />
                                        Assistir
                                    </p>
                                    <p
                                        className="paragrafo__options"
                                        onClick={() => handleEditClick(card, "Front End")}
                                    >
                                        <img
                                            className="imagem__edit"
                                            src="./imgs/Edição.png"
                                            alt="Editar"
                                        />
                                        Editar
                                    </p>
                                </div>
                            </div>
                        ))}
                </section>
            </div>

            {/* Seção Back End */}
            <div className="BackEnd">
                <h1 className="titulo__backend">Back End</h1>
                <section className="cards__container--back">
                    {videos
                        .filter((video) => video.categoria === "Back End")
                        .map((card) => (
                            <div key={card.id} className="card__backend">
                                <div className="card__image-container">
                                    <img
                                        className="imagem__card--back"
                                        src={card.imagem}
                                        alt={card.titulo}
                                    />
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title">{card.titulo}</h3>
                                    <p className="card__description">{card.descricao}</p>
                                </div>
                                <div className="card__options--back">
                                    <p
                                        className="paragrafo__options"
                                        onClick={() => handleDeleteCard(card.id)}
                                    >
                                        <img
                                            className="imagem__del"
                                            src="./imgs/Lixeira.png"
                                            alt="Deletar"
                                        />
                                        Deletar
                                    </p>
                                    <p
                                        className="paragrafo__options"
                                        onClick={() => handleWatchClick(card.video)}
                                    >
                                        <img
                                            className="imagem__play"
                                            src="./imgs/botao-play.png"
                                            alt="Play"
                                        />
                                        Assistir
                                    </p>
                                    <p
                                        className="paragrafo__options"
                                        onClick={() => handleEditClick(card, "Back End")}
                                    >
                                        <img
                                            className="imagem__edit"
                                            src="./imgs/Edição.png"
                                            alt="Editar"
                                        />
                                        Editar
                                    </p>
                                </div>
                            </div>
                        ))}
                </section>
            </div>

            {/* Seção Mobile */}
            <div className="Mobile">
                <h1 className="titulo__mobile">Mobile</h1>
                <section className="cards__container--mobile">
                    {videos
                        .filter((video) => video.categoria === "Mobile")
                        .map((card) => (
                            <div key={card.id} className="card__mobile">
                                <div className="card__image-container">
                                    <img
                                        className="imagem__card--mobile"
                                        src={card.imagem}
                                        alt={card.titulo}
                                    />
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title">{card.titulo}</h3>
                                    <p className="card__description">{card.descricao}</p>
                                </div>
                                <div className="card__options--mobile">
                                    <p
                                        className="paragrafo__options"
                                        onClick={() => handleDeleteCard(card.id)}
                                    >
                                        <img
                                            className="imagem__del"
                                            src="./imgs/Lixeira.png"
                                            alt="Deletar"
                                        />
                                        Deletar
                                    </p>
                                    <p
                                        className="paragrafo__options"
                                        onClick={() => handleWatchClick(card.video)}
                                    >
                                        <img
                                            className="imagem__play"
                                            src="./imgs/botao-play.png"
                                            alt="Play"
                                        />
                                        Assistir
                                    </p>
                                    <p
                                        className="paragrafo__options"
                                        onClick={() => handleEditClick(card, "Mobile")}
                                    >
                                        <img
                                            className="imagem__edit"
                                            src="./imgs/Edição.png"
                                            alt="Editar"
                                        />
                                        Editar
                                    </p>
                                </div>
                            </div>
                        ))}
                </section>
            </div>

            {/* Aba flutuante para edição */}
            {isEditing && (
                <div className="edit-overlay">
                    <div className="edit-form">
                        <img
                            className="imagem__fecharform"
                            src="./imgs/cancel.png"
                            alt="Fechar formulário"
                            onClick={closeEditForm}
                        />
                        <h2 className="titulo__form">EDITAR CARD:</h2>
                        <form>
                            <label>
                                Título:
                                <input type="text" defaultValue={currentCard.titulo} />
                            </label>
                            <label>
                                Categoria:
                                <select defaultValue={currentCard.categoria}>
                                    <option value="Front End">Front End</option>
                                    <option value="Back End">Back End</option>
                                    <option value="Mobile">Mobile</option>
                                </select>
                            </label>
                            <label>
                                Imagem:
                                <input type="text" defaultValue={currentCard.imagem} />
                            </label>
                            <label>
                                Vídeo:
                                <input type="text" defaultValue={currentCard.video} />
                            </label>
                            <label>
                                Descrição:
                                <input type="text" defaultValue={currentCard.descricao} />
                            </label>
                            <div className="buttons">
                                <button type="button" className="button__save">
                                    Guardar
                                </button>
                                <button type="button" className="button__limp">
                                    Limpar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Aba flutuante para assistir vídeo */}
            {isVideoOpen && currentVideo && (
                <div className="video-overlay">
                    <div className="video-container">
                        <img
                            className="imagem__fecharvid"
                            src="./imgs/cancel.png"
                            alt="Fechar aba de vídeo"
                            onClick={closeVideoOverlay}
                        />
                        <iframe
                            width="560"
                            height="315"
                            src={currentVideo.replace("watch?v=", "embed/")}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Main;