import React, { useState, useEffect } from 'react';
import './MemoryGame.css';
import { Link } from 'react-router-dom';

const MemoryGame = () => {
  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);
  const [seconds, setSeconds] = useState(0);

  const pokemons = [
    { id: 1, name: "Letter-front-1" },
    { id: 8, name: "Letter-front-8" },
    { id: 9, name: "Letter-front-9" },
    { id: 6, name: "Letter-front-6" },
    { id: 4, name: "Letter-front-4" },
    { id: 7, name: "Letter-front-7" },
    { id: 10, name: "Letter-front-10" },
    { id: 12, name: "Letter-front-12" },
    { id: 16, name: "Letter-front-16" },
    { id: 20, name: "Letter-front-20" },
  ];

  const pairOfPokemons = [...pokemons, ...pokemons];

  const renderImage = (pokemonId) => {
    const imageName = `Letter-front-${pokemonId}.png`;
    const imagePath = `${imageName}`;
    return <img className='' src={imagePath} alt={`pokemon-${pokemonId}`} width="100" />;
  };

  function flipCard(index) {
    setOpenedCard((opened) => [...opened, index]);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (openedCard < 2) return;

    const firstMatched = pairOfPokemons[openedCard[0]];
    const secondMatched = pairOfPokemons[openedCard[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
  }, [openedCard, matched]);

  return (
    <div className="memory-game-container">
        <div className="timer">
          <h2>Encontre os pares</h2>
          <h3>Tempo: {seconds}</h3>
          </div>
      <div className="cards">
        {pairOfPokemons.map((pokemon, index) => {
          let isFlipped = false;

          if (openedCard.includes(index)) isFlipped = true;
          if (matched.includes(pokemon.id)) isFlipped = true;

          return (
            <div
              className={`pokemon-card ${isFlipped ? "flipped" : ""} `}
              key={index}
              onClick={() => flipCard(index)}
            >
              <div className="inner">
                <div className="front">{renderImage(pokemon.id)}</div>
                <div className="back"></div>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/jogo3-conclusao"><button>AVANÇAR</button></Link>
    </div>
  );
};

export default MemoryGame;
