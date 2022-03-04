import React from 'react';
import "./Modal.css";
import ReactDOM from 'react-dom';

const ModalPortal = ({children, isOpen, closeModal}) => {

    //evitamos la porpagacion del evento cerrar
    const handleModalClick = e => e.stopPropagation();

    return ReactDOM.createPortal(
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className='modal-container' onClick={handleModalClick}>
                <button className='modal-close' onClick={closeModal}>X</button>
                {children}
            </div>
        </article>,
        document.getElementById("modal")
    )
}

export default ModalPortal;
