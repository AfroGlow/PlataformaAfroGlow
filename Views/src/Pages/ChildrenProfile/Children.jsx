import "./Children.css";
import CardKids from "./components/CardsKids/CardKids";

const Children = () => {
  return (
    <div className="container-kids">
      <header className="header-kids">
        <img
          className="logo"
          src="Logo-afroglow-preto.png"
          alt="Logo da AfroGlow (rosto com cabelo afro e um pente garfo)"
        />
        <h4>Lili estrelinha brilhante</h4>
        <div className="exit-kids">
          <p>Sair</p>
          <img src="icon-profile-kids.png"></img>
        </div>
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
      <section className="teste">
      <article className="space-avatars">
        <img className="avatar-special" src="avatar 1.png" alt="" />
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
    </div>
  );
};

export default Children;
