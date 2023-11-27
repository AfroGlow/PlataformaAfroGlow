import React, { useEffect, useRef } from 'react';
import './Partners.css';

const Partners = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    let copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);

  return (
    <div className="logos" ref={logosRef}>
      <div className="logos-slide">
        <img src="public/logo.png" alt="Logo 1" />
        <img src="public/logos.png" alt="Logo 3" />
        <img src="public/logo2.png" alt="Logo 2" />
        <img src="public/logo1.png" alt="Logo 1" />
        <img src="public/logo3.png" alt="Logo 3" />
        
        <img src="public/logo2.png" alt="Logo 2" />
      </div>
    </div>
  );
};

export default Partners;
