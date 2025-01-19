import React, { useState } from "react";
import "./NovosVideos.css";

function NovosVideos() {
    const [videoData, setVideoData] = useState({
        titulo: '',
        categoria: '',
        imagem: '',
        video: '',
        descricao: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVideoData({
            ...videoData,
            [name]: value
        });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/videos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(videoData)
            });

            if (response.ok) {
                alert("Vídeo adicionado com sucesso!");
                setVideoData({
                    titulo: '',
                    categoria: '',
                    imagem: '',
                    video: '',
                    descricao: ''
                });
            } else {
                throw new Error("Erro ao adicionar vídeo.");
            }
        } catch (error) {
            console.error("Erro ao salvar o vídeo:", error);
            alert("Erro ao adicionar o vídeo.");
        }
    };

    const handleReset = () => {
        setVideoData({
            titulo: '',
            categoria: '',
            imagem: '',
            video: '',
            descricao: ''
        });
    };

    return (
        <section className="novos-videos">
            <h1 className="titulo"> NOVO VÍDEO </h1>
            <p className="paragrafo"> Complete o formulário para criar um novo card de vídeo. </p>
            <h2 className="subtitulo"> Criar Card </h2>

            <form className="formulario" onSubmit={handleSave}>
                <label>
                    Título:
                    <input
                        type="text"
                        name="titulo"
                        value={videoData.titulo}
                        onChange={handleChange}
                        placeholder="Insira aqui o Título"
                        required
                    />
                </label>
                <label>
                    Categoria:
                    <select
                        name="categoria"
                        value={videoData.categoria}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled> Escolha aqui a sua categoria </option>
                        <option value="Front End"> Front End </option>
                        <option value="Back End"> Back End </option>
                        <option value="Mobile"> Mobile </option>
                    </select>
                </label>
                <label className="img">
                    Imagem:
                    <input
                        type="text"
                        name="imagem"
                        value={videoData.imagem}
                        onChange={handleChange}
                        placeholder="Link da Imagem é obrigatório"
                        required
                    />
                    {/* Preview da imagem */}
                    {videoData.imagem && (
                        <div className="image-preview">
                            <img
                                src={videoData.imagem}
                                alt="Pré-visualização da Imagem"
                                className="preview-img"
                            />
                        </div>
                    )}
                </label>
                <label>
                    Vídeo:
                    <input
                        type="text"
                        name="video"
                        value={videoData.video}
                        onChange={handleChange}
                        placeholder="Digite o link do Vídeo"
                        required
                    />
                </label>
                <label className="desc">
                    Descrição:
                    <textarea
                        name="descricao"
                        value={videoData.descricao}
                        onChange={handleChange}
                        placeholder="Sobre o que é esse Vídeo?"
                    />
                </label>
                <div className="botoes__novovid">
                    <button className="botao__save" type="submit"> 
                        Guardar 
                    </button>
                    <button className="botao__limp" type="button" onClick={handleReset}> 
                        Limpar
                    </button>
                </div>
            </form>
        </section>
    );
}

export default NovosVideos;