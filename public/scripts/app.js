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
        render();
    }
};

var removeAll = function removeAll() {
    appObj.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * appObj.options.length);
    var option = appObj.options[randomNum];
    alert(option);
    console.log('random index option: ' + randomNum);
};

var appRoot = document.getElementById('app');

var render = function render() {
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
            'button',
            { disabled: appObj.options.length === 0, onClick: onMakeDecision },
            'What course should I take?'
        ),
        React.createElement(
            'p',
            null,
            appObj.options.length > 0 ? 'Here are your options' : 'No Options',
            ':'
        ),
        React.createElement(
            'ol',
            null,
            appObj.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Your Course Choice'
            ),
            React.createElement(
                'button',
                { disabled: appObj.options.length === 0, onClick: removeAll },
                'Remove All'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
