'use strict';

console.log('App is loading...Testing babel');

// JXS - JavaScript XML extensions

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'iLeanx'
    ),
    React.createElement(
        'p',
        null,
        'Testing'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        ),
        React.createElement(
            'li',
            null,
            'Item Three'
        )
    )
);

var userName = 'Lee';
var userAge = 22;
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName.toUpperCase()
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        userAge
    ),
    React.createElement(
        'p',
        null,
        'Location: L.A.'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
