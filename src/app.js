import React from 'react';
import ReactDOM from 'react-dom';
// import IlearnxApp from './components/IlearnxApp';

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    ); 
};

//inline child render
ReactDOM.render((
    <Layout>
        <h1>New page Title</h1>
        <p>New page ctx</p>
    </Layout>    
    ), document.getElementById('app'));



