import React from 'react';

// Option stateless functional component for User
const Option = (props) => (
        <div className="option">
            { props.optionText }
            <button 
                className="button button--link"
                onClick={ (e) => {
                props.handleDeleteIndividualOption (
                    props.optionText
                )
            } }
            >
            <span className="remove-item">&#10008;</span>
            </button>
        </div>
);

export default Option;

