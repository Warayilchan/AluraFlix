import React, { useState } from "react";
import "./Main.css";

function Main() {
    const [isEditing, setIsEditing] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);
    const [currentCategory, setCurrentCategory] = useState(""); // Para diferenciar categorias

    const handleEditClick = (card, category) => {
        setCurrentCard(card); // Define o card que estará sendo editado
        setCurrentCategory(category); // Define a categoria do card
        setIsEditing(true); // Mostra a aba de edição
    };

    const closeEditForm = () => {
        setIsEditing(false); // Esconde a aba de edição
        setCurrentCard(null); // Limpa o card selecionado
        setCurrentCategory(""); // Limpa a categoria
    };

    return (
        <section className="main">

            {/* Front End Section */}
            <div className="FrontEnd">
                <h1 className="titulo__frontend">
                    Front End
                </h1>

                <section className="cards__container">
                    {[1, 2, 3].map((card) => (
                        <div key={`frontend-${card}`} className="card__frontend">
                            <img
                                className="imagem__card"
                                src={`./imgs/image ${card}.png`}
                                alt={`Card ${card}`}
                            />
                            <div className="card__content">
                                <h3 className="card__title"> Título do Vídeo {card} </h3>
                                <p className="card__description">
                                    Descrição do vídeo {card}. Este é um texto demonstrativo.
                                </p>
                            </div>

                            <div className="card__options--front">
                                <p className="paragrafo__options">
                                    <img
                                        className="imagem__del"
                                        src="./imgs/Lixeira.png"
                                        alt="Deletar"
                                    />
                                    Deletar
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

            {/* Back End Section */}
            <div className="BackEnd">
                <h1 className="titulo__backend">
                    Back End
                </h1>

                <section className="cards__container">
                    {[4, 5, 6].map((card) => (
                        <div key={`backend-${card}`} className="card__backend">
                            <img
                                className="imagem__card"
                                src={`./imgs/image ${card}.png`}
                                alt={`Card ${card}`}
                            />
                            <div className="card__content">
                                <h3 className="card__title"> Título do Vídeo {card} </h3>
                                <p className="card__description">
                                    Descrição do vídeo {card}. Este é um texto demonstrativo.
                                </p>
                            </div>
                            <div className="card__options--back">
                                <p className="paragrafo__options">
                                    <img
                                        className="imagem__del"
                                        src="./imgs/Lixeira.png"
                                        alt="Deletar"
                                    />
                                    Deletar
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

            {/* Mobile Section */}
            <div className="Mobile">
                <h1 className="titulo__mobile">
                    Mobile
                </h1>

                <section className="cards__container">
                    {[7, 8, 9].map((card) => (
                        <div key={`mobile-${card}`} className="card__mobile">
                            <img
                                className="imagem__card"
                                src={`./imgs/image ${card}.png`}
                                alt={`Card ${card}`}
                            />
                            <div className="card__content">
                                <h3 className="card__title"> Título do Vídeo {card} </h3>
                                <p className="card__description">
                                    Descrição do vídeo {card}. Este é um texto demonstrativo.
                                </p>
                            </div>
                            <div className="card__options--mobile">
                                <p className="paragrafo__options">
                                    <img
                                        className="imagem__del"
                                        src="./imgs/Lixeira.png"
                                        alt="Deletar"
                                    />
                                    Deletar
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

                        <h2 className="titulo__form">
                            EDITAR CARD:
                        </h2>
                        <form>
                            <label id="editForm">
                                Título:
                                <input
                                    type="text"
                                    defaultValue={`Card ${currentCard}`}
                                />
                            </label>
                            <label>
                                Categoria:
                                <select defaultValue={`Card ${currentCard}`} id="categoria">
                                    <option value="Front End">Front End</option>
                                    <option value="Back End">Back End</option>
                                    <option value="Mobile">Mobile</option>
                                </select>
                            </label>
                            <label>
                                Imagem:
                                <input
                                    type="text"
                                    defaultValue={`./imgs/image ${currentCard}.png`}
                                />
                            </label>
                            <label>
                                Vídeo:
                                <input
                                    type="text"
                                    defaultValue={`Card ${currentCard}`}
                                />
                            </label>
                            <label>
                                Descrição:
                                <input
                                    type="text"
                                    defaultValue={`Card ${currentCard}`}
                                />
                            </label>
                            <div className="buttons">
                                <button className="button__save"> 
                                    Guardar
                                </button>

                                <button className="button__limp"> 
                                    Limpar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Main;
