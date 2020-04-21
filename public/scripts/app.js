'use strict';

console.log('App is loading...Testing babel');

// JXS - JavaScript XML extensions

var appObj = {
    title: 'iLearnx App',
    subtitle: 'What Should I learn next?',
    options: ['React']

};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObj.title
    ),
    appObj.subtitle && React.createElement(
        'p',
        null,
        appObj.subtitle
    ),
    React.createElement(
        'p',
        null,
        appObj.options.length > 0 ? 'Here are your options' : 'No Options',
        ':'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            appObj.options
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
