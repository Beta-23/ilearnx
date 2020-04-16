console.log('App is loading...Testing babel');

// JXS - JavaScript XML extensions

const appObj = {
    title: 'iLearnx App',
    subtitle: 'What Should I learn next?',
    options: ['React']
    
};

const template = (
    <div>
        <h1>{ appObj.title }</h1>
        { appObj.subtitle && <p>{appObj.subtitle }</p>}
        <p>{appObj.options.length > 0 ? 'Here are your options' : 'No Options'}:</p>
        <ul>
            <li>{ appObj.options }</li> 
            
        </ul>
    </div>
);

const user = {
    name: 'Bryant',
    age: 26,
    location: 'L.A.'
};

function getLocation(location) {
    // check for user location conditional
    if (location) {
        return <p>Location: {location}</p>;
    } 
    // console.log('no location found');
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: { user.age }</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);