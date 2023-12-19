import './GameTwoGame.css'
import React, { useRef, useEffect, useState  } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import AudioPlayer from '../../../../components/AudioPlayer/AudioPlayer';
import { Howl } from 'howler';


const GameTwoGame = () => {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [pressStartTime, setPressStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [pressing, setPressing] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.5, '#fff');
    gradient.addColorStop(1, '#fff');
    ctx.fillStyle = gradient;
    ctx.globalAlpha = 0.7;

    class Particle {
      constructor(effect) {
        this.effect = effect;
        this.radius = 0.3;
        this.minRadius = this.radius;
        this.maxRadius = Math.random() * 20 + 10;
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
        this.vx = Math.random() * 0.2 - 0.1;
        this.vy = Math.random() * 0.2 - 0.1;
      }
      draw(context) {
        if (this.radius > 0.4) {
          context.fillStyle = gradient;
          context.beginPath();
          context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          context.fill();
          context.stroke();

          context.fillStyle = 'white';
          context.beginPath();
          context.arc(
            this.x - this.radius * 0.2,
            this.y - this.radius * 0.3,
            this.radius * 0.6,
            0,
            Math.PI * 2
          );
          context.fill();
        }
      }
      update() {
        if (this.effect.mouse.pressed) {
          const dx = this.x - this.effect.mouse.x;
          const dy = this.y - this.effect.mouse.y;
          const distance = Math.hypot(dx, dy);
          if (distance < this.effect.mouse.radius && this.radius < this.maxRadius) {
            this.radius += 3;
          }
        }
        if (this.radius > this.minRadius) this.radius -= 0.05;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < this.radius) {
          this.x = this.radius;
          this.vx *= -1;
        } else if (this.x > this.effect.width - this.radius) {
          this.x = this.effect.width - this.radius;
          this.vx *= -1;
        }
        if (this.y < this.radius) {
          this.y = this.radius;
          this.vy *= -1;
        } else if (this.y > this.effect.height - this.radius) {
          this.y = this.effect.height - this.radius;
          this.vy *= -1;
        }
      }
      reset() {
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
        this.radius = this.minRadius;
      }
    }

    class Effect {
      constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
        this.numberOfParticles = 2000;
        this.createParticles();

        this.mouse = {
          x: 0,
          y: 0,
          pressed: false,
          radius: 60,
        };

        window.addEventListener('resize', (e) => {
          this.resize(e.target.window.innerWidth, e.target.window.innerHeight);
        });
        window.addEventListener('mousemove', (e) => {
          if (this.mouse.pressed) {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
          }
        });
        window.addEventListener('mousedown', (e) => {
          this.mouse.pressed = true;
          this.mouse.x = e.x;
          this.mouse.y = e.y;
        });
        window.addEventListener('mouseup', (e) => {
          this.mouse.pressed = false;
        });
      }
      createParticles() {
        for (let i = 0; i < this.numberOfParticles; i++) {
          this.particles.push(new Particle(this));
        }
      }
      handleParticles(context) {
        //this.connectParticles(context);
        this.particles.forEach((particle) => {
          particle.draw(context);
          particle.update();
        });
      }
      connectParticles(context) {
        const maxDistance = 80;
        for (let a = 0; a < this.particles.length; a++) {
          for (let b = a; b < this.particles.length; b++) {
            const dx = this.particles[a].x - this.particles[b].x;
            const dy = this.particles[a].y - this.particles[b].y;
            const distance = Math.hypot(dx, dy);
            if (distance < maxDistance) {
              context.save();
              const opacity = 1 - distance / maxDistance;
              context.globalAlpha = opacity;
              context.beginPath();
              context.moveTo(this.particles[a].x, this.particles[a].y);
              context.lineTo(this.particles[b].x, this.particles[b].y);
              context.stroke();
              context.restore();
            }
          }
        }
      }
      resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'white');
        gradient.addColorStop(0.5, 'yellow');
        gradient.addColorStop(1, 'orangered');
        this.context.fillStyle = gradient;
        this.particles.forEach((particle) => {
          particle.reset();
        });
      }
    }

    const effect = new Effect(canvas, ctx);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.handleParticles(ctx);

      requestAnimationFrame(animate);
    }; 
  
    animate();
  
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
    
  }, [elapsedTime]);

  
  const handleMouseDown = () => {
    setPressStartTime(new Date().getTime());
    setPressing(true);
  };

  const handleMouseUp = () => {
    setPressing(false);

  };

  useEffect(() => {
    let interval;

    if (pressing) {
      interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const pressDuration = currentTime - pressStartTime;

        // Check if the mouse has been continuously pressed for at least 7 seconds
        if (pressDuration >= 5000) {
          setLgShow(true);
          setElapsedTime(pressDuration);
        } else {
          setLgShow(false);
          setElapsedTime(0);
        }
      }, 100); // Update every 100 milliseconds
    }

    return () => clearInterval(interval);

  }, [pressing, pressStartTime]);

  useEffect(() => {
		// Reprodução automática de música ao carregar a página
		const sound = new Howl({
		  src: ['../Bolinhas-de-diversao.mp3'],
		  autoplay: true,
		  loop: true,
		});
	
		// Limpeza ao desmontar o componente
		return () => {
		  sound.stop();
		};
	  }, []); // O array vazio assegura que o efeito seja executado apenas uma vez

  return (
    <div className='areaGameTwo'>
        <div className='gameTwoShampoo imgClassModalGameTwo'>Shampoo</div>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }}></canvas>
      <img
        ref={imgRef}
        src="criancaCabeloSujo.png" 
        alt=""
        className='imgGameTwo'
        onMouseEnter={() => setShowButton(false)}
        onMouseLeave={() => setShowButton(false)}
      />
      {showButton && (
          <button className="changePageButton">
          Change Page
          </button>
      )}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className='modalGameTwo'
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className="title-modal">
            <h1>Parabéns, você conseguiu!</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalKids">
          <section className="container-modal-kids">
            <img src="avatarModalGameTwo.png" alt="" className='gameModalImgGame' />
            <div className='modalGameContainerTwo'>
              <div>
                <h2 className='modalTitleContainerOne'>Shampoo</h2>
                <AudioPlayer LinkAudio={"../Audio1Shampoo.mp4"}/>
                <p className="description-avatars">Passar shampoo no cabelo é como dar um abraço nos fios! Ele limpa e tira todas as sujeirinhas, deixando o cabelo feliz e saudável. É como uma festa para as madeixas, dando energia para brilhar e ficar macio. É um carinho especial que faz os cabelos se sentirem amados!</p>
              </div>
              <div className="description-avatars">
                <Link to="/jogo2-jogoCondicionador">
                  <button className="nextPageButton">
                    Avançar
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
     
    </div>
  );
   
  
};

export default GameTwoGame;
