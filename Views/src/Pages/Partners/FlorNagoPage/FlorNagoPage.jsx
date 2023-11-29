import React from "react";
import "./FlorNagoPage.css";

const FlorNagoPage = () => {
  return (
    <main>
      <section className="HeaderPartners"> Parceiros AfroGlow</section>
      <section className="FlorNago">
        <div className="img1">
          <img src="./colorspartners.png" />
        </div>
        <div className="logo">
          <img src="./logoflornagô.png" />
          <h1>
            Conecta profissionais da beleza afro a clientes que <br />
            valorizam a diversidade, promevendo inclusão e <br /> valorização da
            beleza afro. Aprimoraremos a <br /> habilidade de conectar pessoas
            às suas raízes, <br />
            cultivando um profundo senso de pertencimento e <br /> conexão com a
            ancestralidade.
          </h1>
        </div>
      </section>
    </main>
  );
};

export default FlorNagoPage;
