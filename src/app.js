console.log('App is loading...Testing babel');

// JXS - JavaScript XML extensions

var template = (
    <div>
        <h1>iLeanx</h1>
        <p>Testing</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
        </ol>
    </div>
);

var userName ='Lee';
var templateTwo = (
    <div>
        <h1>{userName.toUpperCase()}</h1>
        <p>Age: 24</p>
        <p>Location: L.A.</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);