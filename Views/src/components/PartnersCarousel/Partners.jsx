import React, { useEffect, useRef } from 'react';
import './Partners.css';
import { Link } from 'react-router-dom';


const Partners = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    let copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);

  return (
    <div id='FlorNagoPage' className="logos" ref={logosRef}>
      <div className="logos-slide">
        <Link to='/FlorNagoPage'> <img src="public/logoflornagô.png" alt="Logo 1" /></Link>
        <Link to='/NutriAcessPage'> <img  src="public/Logo-nutri.png" alt="Logo 2" /></Link>
        <Link to='/NppePage'> <img src="public/nppelogo.png" alt="Logo 3" /></Link>
       
      
      </div>
    </div>
  );
};

export default Partners;
