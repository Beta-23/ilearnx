console.log('App is loading...Testing babel');

// JXS - JavaScript XML extensions

var appObj = {
    title: 'iLearnx App',
    subtitle: 'What Should I learn next',
    links: 'freecodecamp.org'
};

var template = (
    <div>
        <h1>{ appObj.title }</h1>
        <p>{ appObj.subtitle }:</p>
        <ul>
            <li>{ appObj.links }</li>
            
        </ul>
    </div>
);

var user = {
    name: 'Bryant',
    age: 24,
    location: 'NYC'
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: { user.age }</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);