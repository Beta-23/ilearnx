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
    location: 'L.A.'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } console.log('no location found');
}
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: { user.age }</p>
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);