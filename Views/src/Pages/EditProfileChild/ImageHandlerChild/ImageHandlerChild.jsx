
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./ImageHandlerChild.css"


const ImageHandlerChild = ({ defaultImage, onImageChange }) => {
  const [imageSource, setImageSource] = useState(
    localStorage.getItem('selectedImage') || defaultImage
  );
  const [isModalOpen, setModalOpen] = useState(false);

  const changeImage = (newImageSource, callback) => {
    setImageSource(newImageSource);
    closeImageModal();
    if (typeof callback === 'function') {
      callback();
    }
    localStorage.setItem('selectedImage', newImageSource);
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
        className="img-profile-child img-inner-child"
        onClick={openImageModal}
      />


      <Modal show={isModalOpen} onHide={closeImageModal} centered >
        <Modal.Body >
          <section >
            <div >
              <img
                src="/perfil-avt-1.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-1.png', onImageChange)}
              />
              <img
                src="/perfil-avt-2.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-2.png', onImageChange)}
              />
              <img
                src="/perfil-avt-3.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-3.png', onImageChange)}
              />
              <img
                src="/perfil-avt-4.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-4.png', onImageChange)}
              />
              <img
                src="/perfil-avt-5.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-5.png', onImageChange)}
              />
              <img
                src="/perfil-avt-6.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-6.png', onImageChange)}
              />
              <img
                src="/perfil-avt-7.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-7.png', onImageChange)}
              />
              <img
                src="/perfil-avt-8.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-8.png', onImageChange)}
              />
              <img
                src="/perfil-avt-9.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-9.png', onImageChange)}
              />
              <img
                src="/perfil-avt-10.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-10.png', onImageChange)}
              />
              <img
                src="/perfil-avt-11.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-11.png', onImageChange)}
              />
              <img
                src="/perfil-avt-12.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-12.png', onImageChange)}
              />
              <img
                src="/perfil-avt-13.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-13.png', onImageChange)}
              />
              <img
                src="/perfil-avt-14.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-14.png', onImageChange)}
              />
              <img
                src="/perfil-avt-15.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-15.png', onImageChange)}
              />
              <img
                src="/perfil-avt-16.png"
                alt=""
                className="img-inner-child edit-child-characters"
                onClick={() => changeImage('/perfil-avt-16.png', onImageChange)}
              />
              <img
                src="perfil-lock.png"
                alt=""
                className="img-inner-child edit-child-lock"
                onClick={() => {
                  {
                    alert('Imagem bloqueada!');
                  }
                }}
              />
              <img
                src="perfil-lock.png"
                alt=""
                className="img-inner-child edit-child-lock"
                onClick={() => {
                  {
                    alert('Imagem bloqueada!');
                  }
                }}
              />
              <img
                src="/perfil-lock.png"
                alt=""
                className="img-inner-child edit-child-lock"
                onClick={() => {
                  {
                    alert('Imagem bloqueada!');
                  }
                }}
              />
              <img
                src="/perfil-lock.png"
                alt=""
                className="img-inner-child edit-child-lock"
                onClick={() => {
                  {
                    alert('Imagem bloqueada!');
                  }
                }}


              />
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>

  );
};

export default ImageHandlerChild;