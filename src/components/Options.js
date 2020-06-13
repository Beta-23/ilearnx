import React from 'react';
import Option from './Option';


// Options stateless functional component for User
const Options = (props) => (
        <div>
            <p>{ props.options.length > 0 ? 'Here Are Your Options:' : 'No Options!' }</p>
            {
                props.options.map((option) => (
                    <Option 
                     key={ option } 
                     optionText={ option } 
                     handleDeleteIndividualOption={ props.handleDeleteIndividualOption }
                    />
                ))
            } 
            <div className="widget-header">
            <h3>Your Selections</h3>
            <br />
            <button
                className="button button--link" 
                disabled={ props.options.length === 0 } 
                onClick={ props.handleDeleteOptions }
                >
                Remove All
            </button>
            </div>
            { props.options.length === 0 && 
            <p>Please Add Your Langueage Choice to get Started!</p> }
        </div>
);

export default Options;