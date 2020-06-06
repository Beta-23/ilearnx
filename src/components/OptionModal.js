import React from 'react';

import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
    isOpen={ !!props.selectedOption }
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    >
        <h3>Modal text here</h3>
        { props.selectedOption && <p>{ props.selectedOption }</p> }
        <button onClick={ props.handleClearSelectedOption }
        >
        AWESOME!
        </button>
    </Modal>
);

export default OptionModal;