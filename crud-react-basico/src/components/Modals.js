import React from 'react';
import { useModal } from '../hooks/useModal';
import ContactForm from './ContactForm';
import Modal from './Modal';
import ModalPortal from './ModalPortal';

const Modals = () => {

    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenModalContacto, openModalContacto, closeModalContacto] = useModal(false);
    const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false);

    return (
        <div>
            <h2>Modales</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Este es el contenido del modal 1</p>
                <img src='https://placeimg.com/400/400/animals' alt='Animals' />
            </Modal>

            <button onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Modal 2</h3>
                <p>Lorem ipsum dasdasd asdasd asdasdas adasda</p>
                <img src='https://placeimg.com/400/400/nature' alt='Nature' />
            </Modal>

            <button onClick={openModalContacto}>Modal Contacto</button>
            <Modal isOpen={isOpenModalContacto} closeModal={closeModalContacto}>
                <ContactForm />
            </Modal>

            {/* React Portals */}
            <button onClick={openModalPortal}>Modal Protal</button>
            <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
                <h3>Modal en Portal</h3>
                <p>Este es el contenido del modal que carga en otro nodo del DOM, diferente a donde carga #app</p>
                <img src='https://placeimg.com/400/400/tech' alt='Tech' />
            </ModalPortal>
        </div>
    )
}

export default Modals;

