import React from 'react';

// Header stateless functional component for User
const Header = (props) => (
        <div>
            <h1>{ props.title }</h1>
            { props.subtitle && <h2>{ props.subtitle }</h2> }
        </div>
);

Header.defaultProps = {
    title: 'iLearnx App'
}

export default Header;