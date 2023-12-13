import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.css'

function ModalAi() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='button-modal-ai'  variant="primary" onClick={handleShow}>
        Finalizar
      </Button>

      <Modal  show={show} onHide={handleClose} animation={false} centered>
      
        <Modal.Body className='modalCenter-ai'>
            <div className='align-center-modal-img-ai'>
        <img src="./logoAfroGlow2.svg" alt="" />
        </div>
        <div className='align-center-modal-ai-text'>
            <h4 className='h4-title-modal-ai'>Gabriela, a condição do seu cabelo é:  </h4>
            <h5 className='h5-subtitle-modal-ai'>Levemente Danificado</h5>
            <p className='p-text-modal-ai'>Um cabelo pode sofrer danos leves devido a uma variedade de fatores, como exposição frequente ao sol, uso excessivo de ferramentas de calor, tratamentos químicos ou mesmo condições ambientais adversas. Esses elementos podem comprometer a saúde capilar, resultando em ressecamento, pontas duplas e falta de brilho. Mas não se preocupe, a AfroGlow irá te ajudar!</p>
            </div>
        <div className='align-btn-modal-ai'>
          
          <Link to="/CalcularFrete"> <Button className='btnmodal-ai' onClick={handleClose}>
            Comprar GlowBox
          </Button>  </Link>
          <Link to="/ia"> <Button className='btnmodal-ai' onClick={handleClose}>
           Refazer avaliação
          </Button> </Link>
          </div>
        </Modal.Body>
      
      </Modal>
      
      <Outlet />
      
    </>
  );
}

export default ModalAi;