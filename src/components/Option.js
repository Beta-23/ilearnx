import React from 'react';

// Option stateless functional component for User
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                props.handleDeleteIndividualOption(props.optionText)
            }}
            >
            Remove Item
            </button>
        </div>
    );
};

export default Option;

