import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


const ImageHandlerParents = ({ defaultImage, onImageChangeP }) => {
  const [imageSource, setImageSource] = useState(
    localStorage.getItem('selectedImageP') || defaultImage
  );
  const [isModalOpen, setModalOpen] = useState(false);

  const changeImage = (newImageSourceP, callback) => {
    setImageSource(newImageSourceP);
    closeImageModal();
    if (typeof callback === 'function') {
      callback();
    }
    localStorage.setItem('selectedImageP', newImageSourceP);
  };

  const openImageModal = () => {
    setModalOpen(true);
  };

  const closeImageModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <img
        src={imageSource}
        alt="Profile Avatar"
        className="avatar-selector-img img-inner-parents"
        onClick={openImageModal}
      />

      <Modal 
        show={isModalOpen} 
        onHide={closeImageModal} 
        centered 
        className='avatar-selector-modal'
      >
        <Modal.Body className='avatar-selector-container-modal'>
          <section className='avatar-selector-img-select' >
          <img
                src="/perfil-avt-adult-1.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-adult-1.png', onImageChangeP)}
              />
          <img
                src="/perfil-avt-adult-2.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-adult-2.png', onImageChangeP)}
              />
          <img
                src="/perfil-avt-adult-3.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-adult-3.png', onImageChangeP)}
              />
          <img
                src="/perfil-avt-adult-4.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-adult-4.png', onImageChangeP)}
              />
          <img
                src="/perfil-avt-adult-5.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-adult-5.png', onImageChangeP)}
              />
          <img
                src="/perfil-avt-adult-6.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-adult-6.png', onImageChangeP)}
              />
          <img
                src="/perfil-avt-adult-7.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-adult-7.png', onImageChangeP)}
              />
          <img
                src="/perfil-avt-adult-8.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-adult-8.png', onImageChangeP)}
              />
          <img
                src="/perfil-avt-adult-9.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-adult-9.png', onImageChangeP)}
              />
          <img
                src="/perfil-avt-adult-10.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-adult-10.png', onImageChangeP)}
              />
          <img
                src="/perfil-avt-adult-11.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-adult-11.png', onImageChangeP)}
              />
          <img
                src="/perfil-avt-adult-12.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-adult-12.png', onImageChangeP)}
              />
          <img
                src="/perfil-avt-adult-13.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-adult-12.png', onImageChangeP)}
              />

                <img
                src="/perfil-lock.png"
                alt=""
                className="img-inner-child edit-child-lock"
                onClick={() => {
                  {
                    alert('Imagem bloqueada!');
                  }
                }}/>
                <img
                src="/perfil-lock.png"
                alt=""
                className="img-inner-child edit-child-lock"
                onClick={() => {
                  {
                    alert('Imagem bloqueada!');
                  }
                }}/>

              
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageHandlerParents;