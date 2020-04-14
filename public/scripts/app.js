'use strict';

console.log('App is loading...Testing babel');

// JXS - JavaScript XML extensions

var appTitle = 'iLearnx';
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appTitle
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

var user = {
    name: 'Bryant',
    age: 24,
    location: 'NYC'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.agege
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
