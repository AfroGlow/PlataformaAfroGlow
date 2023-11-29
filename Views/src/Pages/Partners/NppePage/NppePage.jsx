import React from "react";
import "./NppePage.css";


const NppePage = () => {
  return (
    <main>
       
      <section className="HeaderPartners">   Parceiros AfroGlow</section>
      <section className="Nppe">
        <div className="img1">
          <img src="./nppepartnerscolors.png" />
        </div>
        <div className="logo">
          <img src="./nppelogo.png" />
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

export default NppePage;
