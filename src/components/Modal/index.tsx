import React from 'react';

import { Fade, Moda } from './styles';

interface Props {
    children: React.ReactNode;
}

const Modal = ({children}: Props) => {
    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector("#modal")
        modal!.classList.add("hide");
    };

  return (
    <div id="modal" className='hide'>
        <Fade onClick={closeModal}></Fade>
        <Moda>
            <h2>Texto modal</h2>
            {children}
        </Moda>
    </div>
    );
}

export default Modal;