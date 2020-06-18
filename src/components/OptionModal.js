import React from 'react';

import Modal from 'react-modal';
import LangList from './LangList';

const OptionModal = (props) => (
    <Modal 
    isOpen={ !!props.selectedOption }
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
    >
        <h3 className="modal__title">You should learn:</h3>
        { props.selectedOption && 
            <p className="modal__body">{ props.selectedOption }</p> 
        }
        <button 
        className="button" 
        onClick={ props.handleClearSelectedOption }
        >
        AWESOME!
        </button>

        <h3>Get Started!</h3>
        <LangList />
    </Modal>
);

export default OptionModal;