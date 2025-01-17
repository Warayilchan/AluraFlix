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

    return (
        <section className="novos-videos">
            <h1 className="titulo"> NOVO VÍDEO </h1>
            <p className="paragrafo"> Complete o formulário para criar um novo card de vídeo. </p>

            <h2 className="subtitulo"> Criar Card </h2>

            <form className="formulario">
                <label>
                    Título:
                    <input
                        type="text"
                        name="titulo"
                        value={videoData.titulo}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Categoria:
                    <select
                        name="categoria"
                        value={videoData.categoria}
                        onChange={handleChange}
                    >
                        <option value="Front End">Front End</option>
                        <option value="Back End">Back End</option>
                        <option value="Mobile">Mobile</option>
                    </select>
                </label>
                <label>
                    Imagem:
                    <input
                        type="text"
                        name="imagem"
                        value={videoData.imagem}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Vídeo:
                    <input
                        type="text"
                        name="video"
                        value={videoData.video}
                        onChange={handleChange}
                    />
                </label>
                <label className="desc">
                    Descrição:
                    <input
                        type="text"
                        name="descricao"
                        value={videoData.descricao}
                        onChange={handleChange}
                    />
                </label>
            </form>

        <div className="botoes">
            <button className="botao__save" type="submit"> 
              Guardar 
            </button>
            <button className="botao__limp"> 
              Limpar
            </button>
        </div>
    </section>
  );
}

export default NovosVideos;
