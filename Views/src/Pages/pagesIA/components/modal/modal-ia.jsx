import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal-ia.css'

function ModalReconhecimentoCapilar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='button-modal-ia'  variant="primary" onClick={handleShow}>
      Proximo Passo
      </Button>



   
      <Modal  show={show} onHide={handleClose} animation={false} centered>
      
        <Modal.Body className='modalCenter-ia'>
            <div className='align-center-modal-img-ia'>
        <img src="./logoAfroGlow2.svg" alt="" />
        </div>
        <div className='align-center-modal-text'>
            <h4 className='h4-title-modal'>Muito bem, seu cabelo é “Crespo”  </h4>
            <p className='p-text-modal'>Agora precisamos de mais algumas informações, pra isso clique para preencher o formulario</p>
            </div>
        <div className='align-btn-modal-ia'>
          
          <Link to="/"> <Button className='btnmodal' onClick={handleClose}>
          Preencher Formulario
          </Button>  </Link>
          </div>
        </Modal.Body>
      
      </Modal>
      
      <Outlet />
      
    </>
  );
}

export default ModalReconhecimentoCapilar;