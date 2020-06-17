import React from 'react';
import DataList from '../data/list.json'

// Action stateless functional component
const LangList = (props) => (
        <div>
            <ul>
            {DataList.map((listDetail, index) => {
                return <li>{listDetail.codingLanguage}</li>
            })}
            </ul>
        </div>
);

export default LangList;