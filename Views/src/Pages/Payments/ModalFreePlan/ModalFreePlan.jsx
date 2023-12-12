import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalFreePlan.css'
import { Link } from 'react-router-dom';

function ModalFreePlan(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button  className='btn-free-plan' color="danger" onClick={toggle}>Começar Jornada!</Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Bem-vindo à AfroGlow!</ModalHeader>
        <ModalBody>
         
                 img
        É com grande alegria e entusiasmo que damos as boas-vindas a todos à AfroGlow, uma plataforma inovadora dedicada a fortalecer a autoestima de crianças ao redor do mundo. Estamos comprometidos em criar um ambiente inclusivo e empoderador, onde cada criança possa se sentir única, especial e valorizada.


        </ModalBody>
        <ModalFooter>
         <Link to="/"><Button color="primary" onClick={toggle}>Comece sua jornada!</Button> </Link><Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFreePlan;