import "./ChildrenProfile.css";
import CardKids from "./components/CardsKids/CardKids";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import ImageHandlerChild from "../EditProfileChild/ImageHandlerChild/ImageHandlerChild";

const ChildrenProfile = () => {
  const [lgShow, setLgShow] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const avatarsData = [
    {
      name: "Helena 🩷",
      age: 6,
      hairType: "Cacheado 3C",
      favoriteColor: "Rosa",
      description: "Sou Helena, a pequena artista de 6 anos com cachos lindos! Minha alegria é a música, e quando danço e canto minha música favorita, Aventuras Cor-de-Rosa!"
    },
    {
      name: "Mateus 💙",
      age: 7,
      hairType: "Ondulado 2A",
      favoriteColor: "Azul",
      description: "E aí, sou o Matheus, o cara dos cabelos ondulados, como as ondas do mar. Azul é minha cor, me faz pensar em aventuras no oceano. Gosto de construir castelos de areia e imaginar mundos mágicos."
    },
    {
      name: "Camila 💚",
      age: 8,
      hairType: "Cacheado 3A",
      favoriteColor: "Verde",
      description: "E aí, eu sou a Camila! Tenho 8 anos e meus cachos são tipo trampolins. Verde é minha cor, como as folhas das árvores. Adoro explorar, descobrir insetos e brincar ao ar livre."
    },
    {
      name: " Zequinha ❤️",
      age: 6,
      hairType: "Crespo 4C",
      favoriteColor: "Vermelho",
      description: "Oi, Zequinha na area! o garoto dos cachos super legais. Meu cabelo é tipo um redemoinho! Vermelho é minha cor, é cheia de energia, como eu. Adoro rir e fazer bagunça por aí."
    },
    {
      name: "Yasmin 💜",
      age: 7,
      hairType: "Ondulado 2B",
      favoriteColor: "Roxo",
      description: "Olá, eu sou a Yasmin! Tenho cabelos ondulados que parecem ondas suaves. Roxo é minha cor, é como se fosse a cor da minha imaginação. Sempre estou sonhando com aventuras incríveis."
    },
    {
      name: "Tiago 🤎",
      age: 6,
      hairType: "Ondulado 2C",
      favoriteColor: "Marrom",
      description: "Olá, eu sou o Tiago! Amo a terra, cheia de coisas legais para descobrir. Adoro inventar histórias malucas."
    },
    {
      name: "Wendel 🧡",
      age: 5,
      hairType: "Cacheado 3B",
      favoriteColor: "Laranja",
      description: "E aí, eu sou a Wendel! Tenho 5 anos e meus cachos são puro charme. Laranja é minha cor, é como se fosse um abraço bem apertado. Adoro desenhar e brincar de esconde-esconde."
    },
    {
      name: " Lala 💛",
      age: 5,
      hairType: "Crespo 4B",
      favoriteColor: "Amarelo",
      description: "Oi sou a Lala, a pequena com cachinhos que parecem molas de diversão. Meu cabelo é crespinho! Amo amarelo, é como o sol brilhando. Sempre estou rindo e contando histórias incríveis."
    },
    {
      name: "Joãozinho 🩵",
      age: 8,
      hairType: "Crespo 4A",
      favoriteColor: "Turquesa",
      description: "Oi, eu sou a Joãozinho! Tenho cachos que parecem molinhas de mola. Amo turquesa, é como se fosse a cor da aventura. Sempre estou explorando e descobrindo coisas novas."
    },
    {
      name: "Maya 🖤",
      age: 8,
      hairType: "Cacheado 3B",
      favoriteColor: "Preto",
      description: "E aí, sou a Maya! Tenho 7 anos e meus cachos são tipo uma festa. Preto é minha cor, é como o céu cheio de estrelas à noite. Adoro imaginar histórias com finais felizes."
    },
  ];

  const handleAvatarClick = (avatarIndex) => {
    setSelectedAvatar(avatarIndex);
    setLgShow(true);
  };

  return (
    <div className="container-kids">
      <header className="header-kids">
        <img
          className="logo"
          src="Logo-afroglow-preto.png"
          alt="Logo da AfroGlow (rosto com cabelo afro e um pente garfo)"
        />
        <h4>Lili estrelinha brilhante</h4>
        <Link to="/perfil" className="router">
          <div className="exit-kids">
            <p>Sair</p>

            < ImageHandlerChild defaultImage="perfil-avt-1.png" className="img-profile img-profile-child" />

          </div>
        </Link>
      </header>

      <article className="carousel-limit">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="1-caroussel-kids.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="2-caroussel-kids.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </article>

      <section className="container-avatars">
        <article className="space-avatars">
          {[...Array(10)].map((_, index) => (
            <img
              key={index}
              onClick={() => handleAvatarClick(index + 1)}
              className="avatar-special"
              src={`avatar ${index + 1}.png`}
              alt=""
            />
          ))}
        </article>
        <h1>Jogos</h1>
        <CardKids />
      </section>

      <footer className="footer-children">
      </footer>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className="title-modal">
            <h1>{avatarsData[selectedAvatar - 1]?.name}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalKids">
          <section className="container-modal-kids">
            <img src={`avatar ${selectedAvatar}.png`} alt="" />
            <div>
              <div>
                <h2>Idade:</h2>
                <p className="description-avatars">{avatarsData[selectedAvatar - 1]?.age} anos</p>
              </div>
              <article className="container-hair-and-color">
                <div>
                  <h2>Tipo de cabelo:</h2>
                  <p>{avatarsData[selectedAvatar - 1]?.hairType}</p>
                </div>
                <div>
                  <h2>Cor favorita:</h2>
                  <p>
                    {avatarsData[selectedAvatar - 1]?.favoriteColor}
                  </p>
                </div>
              </article>
              <div>
                <p className="description-avatars">{avatarsData[selectedAvatar - 1]?.description}</p>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ChildrenProfile;
