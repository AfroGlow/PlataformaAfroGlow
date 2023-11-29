import React from "react";
import "./NutriAcessPage.css";

const NutriAcessPage = () => {
  return (
    <main>
      <section className="HeaderPartners"> Parceiros AfroGlow</section>

      <section className="NutriAcess">
        <div className="logo">
          <img src="public/Logo-nutri.png" />
          <h1>
            A NutriAcess democratiza o acesso à consultas <br /> nutricionais.
            Considerando a relevância da <br /> alimentação saudável para a
            vitalidade capilar, <br /> proporcionaremos oportunidades para uma
            vida <br /> mais saudável, promovendo o bem-estar dos fios.
          </h1>
        </div>
        <div className="img2">
          <img src="./partnerscolors2.png" />
        </div>
      </section>
    </main>
  );
};

export default NutriAcessPage;
