import "./ChildrenProfile.css";
import CardKids from "./components/CardsKids/CardKids";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";


const ChildrenProfile = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div className="container-kids">
      <header className="header-kids">
        <img
          className="logo"
          src="Logo-afroglow-preto.png"
          alt="Logo da AfroGlow (rosto com cabelo afro e um pente garfo)"
        />
        <h4>Lili estrelinha brilhante</h4>
        <Link to="/perfil">
          <div className="exit-kids">
            <p>Sair</p>
            <img src="icon-profile-kids.png"></img>
          </div>
        </Link>
      </header>

      <article className="carousel-limit">
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="1-caroussel-kids.png" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="1-caroussel-kids.png" class="d-block w-100" alt="..." />
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
      </article>
      <section className="container-avatars">
      <article className="space-avatars">
        <img onClick={() => setLgShow(true)} className="avatar-special" src="avatar 1.png" alt="" />
        <img src="avatar 2.png" alt="" />
        <img src="avatar 3.png" alt="" />
        <img src="avatar 4.png" alt="" />
        <img src="avatar 5.png" alt="" />
        <img src="avatar 6.png" alt="" />
        <img src="avatar 7.png" alt="" />
        <img src="avatar 8.png" alt="" />
        <img src="avatar 9.png" alt="" />
        <img src="avatar 10.png" alt="" />
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
            <h1>Vivian</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalKids">
          <section className="container-modal-kids">
            <img src="avatar-main.png" alt="" />
            <div>
            <div>
              <h2>Idade:</h2>
              <p className="description-avatars">8 anos</p>
            </div>
            <article className="container-hair-and-color">
              <div>
                <h2>Tipo de cabelo:</h2>
                <p>Cacheado 3C</p>
              </div>
              <div>
                <h2>Cor favorita:</h2>
                <p>
                  <div className="favourite-colour">.</div>
                </p>
              </div>
            </article>
            <div>
              <p className="description-avatars">Olá sou a vivian, minha cor favorita é rosa e gosto muito de dancar e cantar e umas das minhas musicas favorita é:</p>
            </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ChildrenProfile;
