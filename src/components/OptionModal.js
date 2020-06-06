import React from 'react';

import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
    isOpen={ !!props.selectedOption }
    contentLabel="Selected Option"
    >
        <h3>Modal text here</h3>
        { props.selectedOption && <p>{props.selectedOption }</p> }
    </Modal>
);

export default OptionModal;