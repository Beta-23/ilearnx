import React from 'react';

// Option stateless functional component for User
const Option = (props) => (
        <div>
            { props.optionText }
            <button 
                className="button button--link"
                onClick={ (e) => {
                props.handleDeleteIndividualOption (
                    props.optionText
                )
            } }
            >
            Remove Item
            </button>
        </div>
);

export default Option;

