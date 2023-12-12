import React, { useState, useRef, useEffect } from 'react';
import './ScreenOne.css'; 
import ButtonDrawGames from '../../../components/ButtonDrawGame/ButtonDrawGames'

const DrawGame = ({props_draw, props_2_draw}) => {
  const containerRef = useRef(null);
  const colorInputRef = useRef(null);
  const sizeInputRef = useRef(null);
  const groupRef = useRef(null);

  const [currentColor, setCurrentColor] = useState('#0075ff');
  const [currentSize, setCurrentSize] = useState(5);
  const [svgWidth, setSvgWidth] = useState(500);
  const [svgHeight, setSvgHeight] = useState(500);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);
  const [circles, setCircles] = useState([]);

  const handleColorChange = () => {
    setCurrentColor(colorInputRef.current.value);
  };

  const handleSizeChange = () => {
    setCurrentSize(sizeInputRef.current.value);
  };

  const handleMouseDown = (e) => {
    setInitialX(containerRef.current.clientWidth / svgWidth);
    setInitialY(containerRef.current.clientHeight / svgHeight);

    const mouseX = e.clientX || e.touches[0].clientX;
    const mouseY = e.clientY || e.touches[0].clientY;
    const relativeX = mouseX - containerRef.current.getBoundingClientRect().left;
    const relativeY = mouseY - containerRef.current.getBoundingClientRect().top;

    setCircles((prevCircles) => [
      ...prevCircles,
      {
        cx: relativeX / initialX,
        cy: relativeY / initialY,
        fill: currentColor,
        r: currentSize,
      },
    ]);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const mouseX = e.clientX || e.touches[0].clientX;
    const mouseY = e.clientY || e.touches[0].clientY;
    const relativeX = mouseX - containerRef.current.getBoundingClientRect().left;
    const relativeY = mouseY - containerRef.current.getBoundingClientRect().top;

    setCircles((prevCircles) => [
      ...prevCircles,
      {
        cx: relativeX / initialX,
        cy: relativeY / initialY,
        fill: currentColor,
        r: currentSize,
      },
    ]);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    containerRef.current.addEventListener('mousedown', handleMouseDown);
    return () => {
      containerRef.current.removeEventListener('mousedown', handleMouseDown);
    };
  }, [currentColor, currentSize, initialX, initialY]);

  useEffect(() => {
    setInitialX(containerRef.current.clientWidth / svgWidth);
    setInitialY(containerRef.current.clientHeight / svgHeight);
  }, [svgWidth, svgHeight]);

  return (
    <>
    
      <div className="screen-1-game-1">
      <img className='back-game-draw' src="../public/icon-button-left.svg" alt="" />
      <h1>Cachinhos ondulados</h1>
        <div className="title-game1">
          
        </div>
        <div className="container-draw" ref={containerRef}>
          <svg
            className="svg-game1"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            enableBackground="new 0 0 464 432"
            xmlSpace="preserve"
          >
            <g id="group" ref={groupRef}>
              {circles.map((circle, index) => (
                <circle key={index} cx={circle.cx} cy={circle.cy} fill={circle.fill} r={circle.r} />
              ))}
            </g>
  
         
            <path fill="#000000" opacity="1.000000" stroke="none" 
	d={props_draw}/>
          </svg>
          <div className="options-game1">
  <div className="color-options">
    <label htmlFor="color-input">Cor: </label>
    <input type="color" id="color-input" value={currentColor} onChange={handleColorChange} ref={colorInputRef} />
  </div>
  <div className="size-game1">
    <label htmlFor="size-input">Tamanho do pincel:</label>
    <input type="range" min="5" max="100" value={currentSize} id="size-input" onChange={handleSizeChange} ref={sizeInputRef} style={{ borderRadius: "50px" }} />
            </div>
          </div>
          <div className="button-game1-draw1">
          <ButtonDrawGames props_button_draw={props_2_draw}/>
          </div>
          
        </div>
        
      </div>
      </>
        );
    };
    
    export default DrawGame;
    