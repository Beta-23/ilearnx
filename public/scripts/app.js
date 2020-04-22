'use strict';

console.log('App is loading...Testing babel');

// JXS - JavaScript XML extensions

var appObj = {
    title: 'iLearnx App',
    subtitle: 'What Should I learn next?',
    options: []

};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        appObj.options.push(option);
        e.target.elements.option.value = '';
    }
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
        'p',
        null,
        appObj.options.length
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            appObj.options
        )
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add Your Course Choice'
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
