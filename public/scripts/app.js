'use strict';

console.log('App is loading...Testing babel');

var visibility = false;

var changeVisibility = function changeVisibility() {};

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
        )
    );
    ReactDOM.render(toggle, document.getElementById('app'));
};
render();
