console.log('App is loading...Testing babel');

// JXS - JavaScript XML extensions

var appTitle = 'iLearnx';
var template = (
    <div>
        <h1>{ appTitle }</h1>
        <p>Testing</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
        </ol>
    </div>
);

var user = {
    name: 'Bryant',
    age: 24,
    location: 'NYC'
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: { user.agege }</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);