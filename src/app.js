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

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
