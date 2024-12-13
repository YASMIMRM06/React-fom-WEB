// src/componentes/Galeria.js
import React from 'react';
import './Galeria.css'; // Estilos para a galeria

const Galeria = () => {
  const imagens = [
    { src: '/src/img/baba_yaga.jpg', alt: 'Baba Yaga' },
    { src: '/src/img/com_sangue.jpg', alt: 'Com Sangue' },
    { src: '/src/img/dracula.jpg', alt: 'Dracula' },
    { src: '/src/img/lilith.jpg', alt: 'Lilith' },
    { src: '/src/img/o_lado_sombrio_dos_contos_de_fadas.jpg', alt: 'O Lado Sombrio dos Contos de Fadas' },
    { src: '/src/img/o_menino_que_desenhava_monstros.jpg', alt: 'O Menino Que Desenhava Monstros' },
    { src: '/src/img/outsider.jpg', alt: 'Outsider' },
    { src: '/src/img/princesas_dark.jpg', alt: 'Princesas Dark' },
    { src: '/src/img/sob_a_capa_vermelha.jpg', alt: 'Sob a Capa Vermelha' },
  ];

  return (
    <div className="galeria-container">
      <h2>Galeria de Livros de Terror</h2>
      <div className="galeria">
        {imagens.map((imagem, index) => (
          <div key={index} className="imagem-item">
            <img src={imagem.src} alt={imagem.alt} className="imagem" />
            <p>{imagem.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
