'use strict';

console.log('App is loading...Testing babel');

// JXS - JavaScript XML extensions

var appObj = {
    title: 'iLearnx App',
    subtitle: 'What Should I learn next',
    links: 'freecodecamp.org'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObj.title
    ),
    React.createElement(
        'p',
        null,
        appObj.subtitle,
        ':'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            appObj.links
        )
    )
);

var user = {
    name: 'Bryant',
    age: 24,
    location: 'L.A.'
};

function getLocation(location) {
    // check for user location conditional
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
    // console.log('no location found');
}
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
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
