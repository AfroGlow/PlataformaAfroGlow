// Notes.js
import React, { useState, useEffect } from 'react';
import './Notes.css'; // Certifique-se de importar seu arquivo de estilo
import HeaderResponsible from '../components/HeaderResponsible/HeaderResponsible';
import LeftSideResponsible from '../components/LeftSideResponsible/LeftSideResponsible';

const Notes = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items_db')) || []
  );

  const colors = ['#6F4941', '#0ABBB5', '#F74354', '#AD4AFF', '#FFEB68', '#6FA682'];

  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

  const loadItems = () => {
    verifyNulls();
    addEvents();
  };

  const addNote = () => {
    const newItem = {
      text: '',
      color: randomColor(),
    };

    setItems([...items, newItem]);
  };

  const addHTML = (item, index) => (
    <div className="item" key={index} style={{ backgroundColor: item.color }}>
      <span className="remove" onClick={() => removeItem(index)}>
        X
      </span>
      <textarea
        value={item.text}
        onChange={(e) => handleInputChange(e, index)}
      ></textarea>
    </div>
  );

  const addEvents = () => {
    // Adicione eventos aqui, similar ao script.js original
  };

  const handleInputChange = (event, index) => {
    const newItems = [...items];
    newItems[index] = {
      text: event.target.value,
      color: newItems[index]?.color || event.target.parentElement.style.backgroundColor,
    };
    setItems(newItems);
    localStorage.setItem('items_db', JSON.stringify(newItems));
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    localStorage.setItem('items_db', JSON.stringify(newItems));
    addEvents();
  };

  const verifyNulls = () => {
    const nonNullItems = items.filter((item) => item);
    setItems(nonNullItems);
    localStorage.setItem('items_db', JSON.stringify(nonNullItems));
  };

  useEffect(() => {
    loadItems();
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <>
      <div className="notes">
        <LeftSideResponsible />
        <HeaderResponsible />
        <div className="container-notes"> 
        <div className="container">
          <div className="addNote-content" onClick={addNote}>
            <div className="icon-plus">+</div>
            <span>Adicionar</span>
          </div>
          <div className="content">{items.map((item, index) => addHTML(item, index))}</div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Notes;
