'use strict';

console.log('App is loading...Testing babel');

var visibility = false;

var changeVisibility = function changeVisibility() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var toggle = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Toggle'
        ),
        React.createElement(
            'button',
            { onClick: changeVisibility },
            visibility ? 'HIDE DETAILS' : 'SHOW DETAILS'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Your Details Here!'
            )
        )
    );

    ReactDOM.render(toggle, document.getElementById('app'));
};

render();
